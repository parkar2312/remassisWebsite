// import { Connection } from "pg";
// import conn from "../lib/db2";
// console.log(conn);
// export default async function handler(req, res) {
//   let connection = await conn();
//   console.log(connection);
//   console.log(req.body);
//   try {
//     console.log("req nom", req.body);
//     const query =
//       "INSERT INTO public.data_feedback(Description,Desctype,Emoji) VALUES($1,$2,$3)";
//     const values = [req.body.Description, req.body.Desctype, req.body.Emoji];
//     const result = await connection.query(query, values);
//     res.status(200).json({ data: `success` });
//     console.log("ttt", result);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ data: `fail` });
//   }
//   console.log("hi");
// }

const db = require("../../models");
const User = db.user;

exports.create = (req, res) => {
  console.log("hi hi");
  if (!req.body.Description) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const user = {
    description: req.body.Description,
    desctype: req.body.Desctype,
    emoji: req.body.Emoji,
  };
  console.log("hi");
  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occurred while creating the Student.",
      });
    });
};
