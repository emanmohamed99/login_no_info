/**
 * 1-npm i express
 * 2-npm i body-parser
 * 3-npm i path
 */

const express = require("express");
const app = express();
const PORT = process.env.PORT || 7400
const bodyParser = require("body-parser")
var cors = require('cors');
const path = require("path")
const Ajv = require("ajv");
const mongoose = require("mongoose");
app.use(cors());
var ajv = new Ajv();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
const DB_URL = "mongodb://127.0.0.1:27017/login";

mongoose.connect(DB_URL, {useNewUrlParser:true});
//#region For Students [CRUD] [Creat-Read-Update-Delete]
//#endregion

//#region For Auth Users [CRUD] [Creat-Read-Update-Delete]
var usersRoutes = require("./Routes/usersRoutes");
var searchRoutes = require("./Controllers/searchController");
app.use("/api/users",usersRoutes);
app.use("/api/search",searchRoutes);
//#endregion

app.listen(7400, ()=>{console.log("http://localhost:"+7400)})