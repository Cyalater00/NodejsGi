const express = require("express");
const app = express();
const fs = require("fs");
const port = 8000;

app.use(express.json());

// this line read flies from json file and prints it on the local host 
const data = require("./employee.json");
app.get("/", function (req, res) {
  res.json(data);
});

//this line get the id of employess from the local host
app.get("/:id", function (req, res) {
  const id = req.params.id;
  res.json(data[id]);
});

//This line decided what port is going to listen on
app.listen(port, () => {
  console.log(`it's live on http://localhost:${port}`);
});

//this line prints error when user inputs something else
app.use((req, res) => {
  res.status(404).send("Sorry , wrong ID!");
  
});
