const { Client } = require("pg");

let connection = new Client({
  user: "postgres",
  password: "parimal",
  host: "localhost",
  port: 5432,
  database: "form_data",
});
export default async function connectDB() {
  await connection.connect();
  return connection;
}
