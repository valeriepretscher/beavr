'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _UsersMstroeckDevelopmentBeavrServerTestTestManager = require('/Users/mstroeck/Development/beavr/server/test/testManager');

var _UsersMstroeckDevelopmentBeavrServerTestTestManager2 = _interopRequireDefault(_UsersMstroeckDevelopmentBeavrServerTestTestManager);

describe('Data', function () {
  var _this = this;

  var app = _UsersMstroeckDevelopmentBeavrServerTestTestManager2['default'].app;
  var models = app.data.sequelize.models;
  it('seed tha database', function callee$1$0() {
    var userCount, groupCount, permissionCount;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(app.seed());

        case 2:
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(models.User.count());

        case 4:
          userCount = context$2$0.sent;

          (0, _assert2['default'])(userCount > 0);

          context$2$0.next = 8;
          return _regeneratorRuntime.awrap(models.Group.count());

        case 8:
          groupCount = context$2$0.sent;

          (0, _assert2['default'])(groupCount > 0);

          context$2$0.next = 12;
          return _regeneratorRuntime.awrap(models.Permission.count());

        case 12:
          permissionCount = context$2$0.sent;

          (0, _assert2['default'])(permissionCount > 0);

        case 14:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});