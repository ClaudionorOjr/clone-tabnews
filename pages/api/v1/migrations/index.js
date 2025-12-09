import { createRouter } from "next-connect";
import migrationRunner from "node-pg-migrate";
import { resolve } from "node:path";
import database from "infra/database.js";
import controller from "infra/controller";

const router = createRouter();

router.get(getHandler).post(postHandler);

export default router.handler(controller.errorHandlers);

async function newClient() {
  const dbClient = await database.getNewClient();

  return {
    dbClient,
    dryRun: true,
    dir: resolve("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  };
}

async function getHandler(request, response) {
  let dbClient;

  try {
    const defaultMigrationOptions = await newClient();
    dbClient = defaultMigrationOptions.dbClient;

    const pendingMigrations = await migrationRunner(defaultMigrationOptions);

    return response.status(200).json(pendingMigrations);
  } finally {
    await dbClient?.end();
  }
}

async function postHandler(request, response) {
  let dbClient;

  try {
    const defaultMigrationOptions = await newClient();
    dbClient = defaultMigrationOptions.dbClient;

    const migratedMigrations = await migrationRunner({
      ...defaultMigrationOptions,
      dryRun: false,
    });

    const statusCode = migratedMigrations.length > 0 ? 201 : 200;

    return response.status(statusCode).json(migratedMigrations);
  } finally {
    await dbClient?.end();
  }
}
