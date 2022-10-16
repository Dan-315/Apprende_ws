"use strict";
exports.__esModule = true;
exports.apprendeDB = void 0;
var mongoose_1 = require("mongoose");
var chalk_1 = require("chalk");
process.env.PORT;
// const red=chalk.bold.red;
// const magenta=chalk.bold.magenta;
var ConectDB = /** @class */ (function () {
    function ConectDB() {
    }
    ConectDB.prototype.initConect = function (host, db) {
        mongoose_1["default"].connect(host, { dbName: db })
            .then(function () {
            console.log(chalk_1["default"].blue('////////////////////////////////////////////'));
            console.log(host + db + "-->    Conectado satisfactoriamente");
            // console.log(cyan("////////////////////////////////////////////"));
        })["catch"](function (error) {
            // console.log(red("////////////////////////////////////////////"));
            console.log("--ERROR: " + error.message);
            // console.log(red("////////////////////////////////////////////"));
        });
    };
    return ConectDB;
}());
exports.apprendeDB = new ConectDB();
