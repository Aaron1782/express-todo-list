const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const date = require(__dirname + "/date.js");

const port = 3000 || process.env.PORT;
const app = express();

var items = ["Buy food", "Cook Food", "Eat Food"];
let workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.get("/", (req, res) => {

  let day = date.getDay;
  
  res.render("list", {
    listTitle: date,
    newListItem: items,
  });
});
app.post("/", (req, res) => {
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    console.log(req.body.list + " HERE");
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

  items.push(item);

  res.redirect("/");
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItem: workItems });
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/");
});

app.listen(port, () => {
  console.log("Server is now up and running on port 3000");
});

app.get("/about", (req, res) => {
  res.render("about");
});
