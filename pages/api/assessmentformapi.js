// import conn from "../lib/db";

// export default async function handler(req, res) {
//   const body = req.body;
//   res.status(200).json({ data: `${body.first} ${body.last}` });
//   const query = "INSERT INTO patient(first_name) VALUES($1)";
//   const values = [req.body.content];
//   const result = await conn.query(query, values);
// }
import { Connection } from "pg";
import conn from "../lib/db";
console.log(conn);
export default async function handler(req, res) {
  let connection = await conn();
  console.log(connection);
  console.log(req.body);
  try {
    console.log("req nom", req.body);
    // const query = `INSERT INTO patient.patient(id,first_name) VALUES( 1,${req.body.first})`;
    const query =
      "INSERT INTO form_data.data_new(ID,Age,Occupation,Contact,Gender,Date,C_complain,M_history,P_history,Exercise,C_finding,Investigation,Screening1,Screening2,T_plan,Advice) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)";
    const values = [
      req.body.ID,
      req.body.Age,
      req.body.Occupation,
      req.body.Contact,
      req.body.Gender,
      req.body.Date,
      req.body.C_complain,
      req.body.M_history,
      req.body.P_history,
      req.body.Exercise,
      req.body.C_finding,
      req.body.Investigation,
      req.body.Screening1,
      req.body.Screening2,
      req.body.T_plan,
      req.body.Advice,
    ];
    const result = await connection.query(query, values);
    res.status(200).json({ data: `success` });
    // return res.status(200).json({ data: `${body.first} ${body.last}` });
    console.log("ttt", result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: `fail` });
  }
  console.log("hi");
}
