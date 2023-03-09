import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config("../");

//console.log(process.env.DB_NAME);
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "helpdesk",
});

export const connect = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "boprita_credit",
});

export default connection;
