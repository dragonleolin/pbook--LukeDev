import express from "express";
import bodyparser from "body-parser";
import cors from "cors";

import products from "./api/products";
import orders from "./api/orders";
import register from "./api/register"
import login from "./api/login"

const app = express();
const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "pbook"
});
db.connect();

const bluebird = require("bluebird");
bluebird.promisifyAll(db);
//session
// const session = require("express-session")
// app.use()


app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/products", products);
app.use("/orders", orders);
app.post("/register", register)
app.post("/login", login)

app.use(express.static("public"));

app.get("/", function(req, res, next) {
  res.send("Home");
});



// app.use("/forum", require("./src/forum/homepage"));

//if we are here then the specified request is not found
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//all other requests are not implemented.
app.use((err, req, res, next) => {
  res.status(err.status || 501);
  res.json({
    error: {
      code: err.status || 501,
      message: err.message
    }
  });
});



module.exports = app;
