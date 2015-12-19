'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _UserApi = require('./UserApi');

var _UserApi2 = _interopRequireDefault(_UserApi);

var log = require('logfilename')(__filename);

exports['default'] = function (app) {
  var userApi = (0, _UserApi2['default'])(app);
  var respond = app.utils.http.respond;

  function index(req, res) {
    respond(userApi, userApi.list, [req.query], res);
  }

  function show(req, res) {
    log.info("show user id: ", req.params.id);
    respond(userApi, userApi.get, [req.params.id], res);
  }

  return {
    index: index,
    show: show
  };
};

module.exports = exports['default'];