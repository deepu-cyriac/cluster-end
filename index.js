const express = require("express");
require("dotenv").config();

const run = require("./db/mongo-conn");

app = express();
const PORT = process.env.PORT || 3001;

app.get("/", async (req, res) => {
  res.send(
    "Welcome to Cluster End - Central Backend Application with Multiple Databases."
  );
});

app.get("/mongo", async (req, res) => {
  const db = await run();
  let products = await db.collection("electronics");

  let results = await products.find({}).limit(50).toArray();
  res.send(results).status(200);
});

app.get("/postgres", async (req, res) => {
  const db = await run();

  res.send("Testing Postgres.");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
