const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "John Smith" },
  { id: 4, name: "Jane Smith" }
];

app.get("/", (req, res) => {
    res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
