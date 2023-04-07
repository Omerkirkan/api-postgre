require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const db = require("./dbConn");
app.use(cors());
app.use(express.json());

db.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

app.get("/getusers", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result.rows);
  });
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;
  db.query(
    "INSERT INTO users (email, password) VALUES ($1, $2)",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send("Values inserted");
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
