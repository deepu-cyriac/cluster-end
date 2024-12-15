const { Pool } = require("pg");

const pool = new Pool({
  user: process.env,
  host: process.env,
  database: process.env,
  password: process.env,
  port: process.env,
});

async function run() {
  try {
    pool.connect((err, client, release) => {
      if (err) {
        console.error("Error connecting to Postgres database.", err.stack);
      }
      console.log("Connected to Postgres database.");
    });
    return pool;
  } finally {
    //release(); //release the client back to the pool;
  }
}
