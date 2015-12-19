'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _MeApi = require('./MeApi');

var _MeApi2 = _interopRequireDefault(_MeApi);

var log = require('logfilename')(__filename);

exports['default'] = function (app) {
  var respond = app.utils.http.respond;
  var meApi = (0, _MeApi2['default'])(app);
  return {
    index: function index(req, res) {
      log.debug("get ", req.user);
      respond(meApi, meApi.index, [req.user.id], res);
    },
    patch: function patch(req, res) {
      log.debug("patch ", req.user);
      respond(meApi, meApi.patch, [req.user.id, req.body], res, 204);
    }
  };
};

module.exports = exports['default'];