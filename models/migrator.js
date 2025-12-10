import { resolve } from "node:path";
import database from "infra/database.js";
import migrationRunner from "node-pg-migrate";
import { ServiceError } from "infra/errors";

const defaultMigrationOptions = {
  dir: resolve("infra", "migrations"),
  direction: "up",
  verbose: true,
  migrationsTable: "pgmigrations",
};

async function runMigrations(dryRun = true) {
  let dbClient;

  try {
    dbClient = await database.getNewClient();

    const pendingMigrations = await migrationRunner({
      ...defaultMigrationOptions,
      dryRun,
      dbClient,
    });

    return pendingMigrations;
  } catch (error) {
    const serviceErrorObject = new ServiceError({
      message: "Erro na conexão com banco ou na query",
      cause: error,
    });

    throw serviceErrorObject;
  } finally {
    await dbClient?.end();
  }
}

const migrator = {
  listPendingMigrations: () => runMigrations(),
  runPendingMigrations: () => runMigrations(false),
};

export default migrator;
