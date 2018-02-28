const express = require("express");
const bodyParser = require("body-parser");
const bc = require(__dirname + "/controllers/books_controller.js");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));

const baseUrl = "/api/books";
app.post(baseUrl, bc.create);
app.get(baseUrl, bc.read);
app.put(`${baseUrl}/:id`, bc.update);
app.delete(`${baseUrl}/:id`, bc.delete);

const port = 3000;
app.listen(port, function() {
  console.log("Listening!");
});
