import database from "../../../../infra/database";
import Database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ status: "Estar tudo Funcionando" });
}

export default status;
