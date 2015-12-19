'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

console.log('Seeding');
var app = (0, _app2['default'])();
app.seed().then(function () {
  return console.log('Seeded');
})['catch'](function (error) {
  return console.error(error);
});