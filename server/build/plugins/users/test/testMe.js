'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _UsersMstroeckDevelopmentBeavrServerTestTestManager = require('/Users/mstroeck/Development/beavr/server/test/testManager');

var _UsersMstroeckDevelopmentBeavrServerTestTestManager2 = _interopRequireDefault(_UsersMstroeckDevelopmentBeavrServerTestTestManager);

describe('Users', function () {
  var _this = this;

  var client = undefined;
  before(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(_UsersMstroeckDevelopmentBeavrServerTestTestManager2['default'].start());

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  after(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(_UsersMstroeckDevelopmentBeavrServerTestTestManager2['default'].stop());

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });

  describe('User Basic ', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      var _this2 = this;

      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          before(function callee$2$0() {
            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
                case 0:
                  client = _UsersMstroeckDevelopmentBeavrServerTestTestManager2['default'].client('alice');
                  (0, _assert2['default'])(client);
                  context$3$0.next = 4;
                  return _regeneratorRuntime.awrap(client.login());

                case 4:
                case 'end':
                  return context$3$0.stop();
              }
            }, null, _this2);
          });
          it('should get me', function callee$2$0() {
            var me;
            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
                case 0:
                  context$3$0.next = 2;
                  return _regeneratorRuntime.awrap(client.get('v1/me'));

                case 2:
                  me = context$3$0.sent;

                  (0, _assert2['default'])(me);

                case 4:
                case 'end':
                  return context$3$0.stop();
              }
            }, null, _this2);
          });
          it('should patch user', function callee$2$0() {
            var data, dataOld;
            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
                case 0:
                  data = {
                    username: "Ciccio"
                  };
                  context$3$0.next = 3;
                  return _regeneratorRuntime.awrap(client.patch('v1/me', data));

                case 3:
                  dataOld = {
                    username: "alice"
                  };
                  context$3$0.next = 6;
                  return _regeneratorRuntime.awrap(client.patch('v1/me', dataOld));

                case 6:
                case 'end':
                  return context$3$0.stop();
              }
            }, null, _this2);
          });
          it('malformed patch username too short', function callee$2$0() {
            var data;
            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
                case 0:
                  data = {
                    username: "Ci"
                  };
                  context$3$0.prev = 1;
                  context$3$0.next = 4;
                  return _regeneratorRuntime.awrap(client.patch('v1/me', data));

                case 4:
                  (0, _assert2['default'])(false);
                  context$3$0.next = 10;
                  break;

                case 7:
                  context$3$0.prev = 7;
                  context$3$0.t0 = context$3$0['catch'](1);

                  _assert2['default'].equal(context$3$0.t0.statusCode, 400);

                case 10:
                case 'end':
                  return context$3$0.stop();
              }
            }, null, _this2, [[1, 7]]);
          });

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});

//assert(me);