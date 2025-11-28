import useSWR from "swr";
async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();

  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtTtext = "Carregando...";

  if (!isLoading && data) {
    updatedAtTtext = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return (
    <div>
      <p>Última atualização: {updatedAtTtext}</p>
      {data && (
        <>
          <h2>Database</h2>
          <p>Versão do banco de dados: {data.dependencies.database.version}</p>
          <p>
            Máximo de conexões: {data.dependencies.database.max_connections}
          </p>
          <p>
            Conexões abertas: {data.dependencies.database.opened_connections}
          </p>
        </>
      )}
    </div>
  );
}
