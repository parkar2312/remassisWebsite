const { Pool } = require("pg");
let pool = new Pool({
  user: "postgres",
  password: "parimal",
  host: "localhost",
  port: 5432,
  database: "feedback_data",
});
export default async function connectDB() {
  await pool.connect();
  return pool;
}
