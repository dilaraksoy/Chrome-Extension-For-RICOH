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
  


  var newData = JSON.stringify(users);
  if (req.body != null) {
    var file = reader.readFile("./test.xlsx");
    var ws = reader.utils.json_to_sheet(users);
    let data = [];

    const sheets = file.SheetNames;

    for (let i = 0; i < sheets.length; i++) {
      const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
      temp.forEach((res) => {
       
        
        data.push(res);
        
      });

    }
    if (!JSON.stringify(data).includes(JSON.stringify(users[0]))) {
      reader.utils.sheet_add_json(file.Sheets[file.SheetNames[0]], users, {
        header: ["Name", "Surname", "Day", "DeskNo"],
        skipHeader: true,
        origin: -1,
      });
      reader.writeFile(file, "./test.xlsx");
    }
    
  }

  res.send("added");
});
app.get("/user", (req, res) => {
  console.log("sended");
  res.json(users);
});
app.listen(port, () => console.log(` ${users.length}`));
