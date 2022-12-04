
"use strict";
//모듈
const express = require("express");
const app = express();
const home =require("./src/routes/home");

//라우팅
app.set("views", "./src/views")
app.set("view engine", "ejs");

app.use("/",home);

module.exports = app;