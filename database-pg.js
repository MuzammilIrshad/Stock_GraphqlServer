import dotenv from 'dotenv';
import pg from "pg";
dotenv.config();

const pool = new pg.Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.PRIMARY_DATABASE
});

export const clientQuery = (query) => {
  return new Promise((resolve, reject) => {
    pool.connect((err, client, done) => {
      client.query(query, (err, result) => {
        done();
        resolve(result);
      });
    });
  });
};