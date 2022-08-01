const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const reader = require("xlsx");
const file = reader.readFile("./test.xlsx");
const app = express();
const port = 3000;
let users = [];

app.use(cors());

app.use(bodyParser.urlencoded({ entended: false }));
app.use(bodyParser.json());

app.post("/user", (req, res) => {
  users = [];
  const user = req.body;
  users.push(req.body);

  console.log(users);
  var newData = JSON.stringify(users);
  if (req.body != null) {
    var file = reader.readFile("./test.xlsx");
    var ws = reader.utils.json_to_sheet(users);
    reader.utils.book_append_sheet(file, ws, "NewTest1");
    reader.writeFile(file, "./test.xlsx");
  }

  res.send("added");
});
app.get("/user", (req, res) => {
  console.log("sended");
  res.json(users);
});
app.listen(port, () => console.log(` ${users}`));
