const express = require("express");

const app = express();


app.route("/").get((req, res) => {
  res.status(200).send("<h1>Mukodiiik</h1>");
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
