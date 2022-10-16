"use strict";
exports.__esModule = true;
var express_1 = require("express");
var database_1 = require("./config/database");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var app = (0, express_1["default"])();
var port = process.env.PORT;
app.get('/', function (req, res) {
    res.send('Express + TypeScript Server');
});
app.listen(port, function () {
    console.log("[server]: Server is running at https://localhost:".concat(port));
});
database_1.apprendeDB.initConect(process.env.DBHOST || "", process.env.DBNAME || "");
