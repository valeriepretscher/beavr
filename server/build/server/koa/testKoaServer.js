'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _UsersMstroeckDevelopmentBeavrServerTestTestManager = require('/Users/mstroeck/Development/beavr/server/test/testManager');

var _UsersMstroeckDevelopmentBeavrServerTestTestManager2 = _interopRequireDefault(_UsersMstroeckDevelopmentBeavrServerTestTestManager);

var _koaServer = require('./koaServer');

var _koaServer2 = _interopRequireDefault(_koaServer);

describe('Koa', function () {
  var _this = this;

  it('start and stop ok', function callee$1$0() {
    var server;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          server = (0, _koaServer2['default'])(_UsersMstroeckDevelopmentBeavrServerTestTestManager2['default'].app);
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(server.start());

        case 3:
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(server.stop());

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});