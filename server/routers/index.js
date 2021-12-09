const express = require("express");
const app = express();
const userRouter = require("./userRouter");

app.use("/api", userRouter);

module.exports = app;
