"use strict";

const mongdbConnection = require("./server/dbConnection/mongoDB");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const routes = require("./server/routers/index");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("", routes);

mongdbConnection.db_connection();

const port = process.env.NODE_ENV == "development" ? process.env.PORT : 8080;

app.listen(port, () => {
	console.log(`listening to port ${port}`);
});

module.exports = app;
