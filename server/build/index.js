"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

console.log("api server started");

var app = (0, _app2["default"])();
app.displayInfoEnv();

app.start()["catch"](function (err) {
  console.error("App ending with error: ", err);
});