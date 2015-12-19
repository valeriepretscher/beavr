"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UserApi;
var log = require('logfilename')(__filename);

function UserApi(app) {
  var models = app.data.models();

  return {
    getAll: function getAll(qs) {
      log.debug("list qs: ", qs);
      var filter = app.data.queryStringToFilter(qs, "id");
      return models.User.findAll(filter);
    },
    getOne: function getOne(userId) {
      log.debug("get userId: ", userId);
      return models.User.findByUserId(userId);
    }
  };
}

module.exports = exports["default"];