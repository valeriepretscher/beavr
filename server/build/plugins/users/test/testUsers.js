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

  describe('Admin', function () {
    before(function callee$2$0() {
      var res;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            client = _UsersMstroeckDevelopmentBeavrServerTestTestManager2['default'].client('admin');
            (0, _assert2['default'])(client);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(client.login());

          case 4:
            res = context$3$0.sent;

            (0, _assert2['default'])(res);

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should get all users', function callee$2$0() {
      var users;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(client.get('v1/users'));

          case 2:
            users = context$3$0.sent;

            (0, _assert2['default'])(users);

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should get all users with filter ASC', function callee$2$0() {
      var users;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(client.get('v1/users?offset=10&order=ASC&limit=100'));

          case 2:
            users = context$3$0.sent;

            (0, _assert2['default'])(users);

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should get all users with filter DESC', function callee$2$0() {
      var users;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(client.get('v1/users?offset=10&order=DESC&limit=100'));

          case 2:
            users = context$3$0.sent;

            (0, _assert2['default'])(users);

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should get one user', function callee$2$0() {
      var user;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(client.get('v1/users/1'));

          case 2:
            user = context$3$0.sent;

            (0, _assert2['default'])(user);

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it.skip('should not create a new user with missing username', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.prev = 0;
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(client.post('v1/users'));

          case 3:
            (0, _assert2['default'])(false);
            context$3$0.next = 10;
            break;

          case 6:
            context$3$0.prev = 6;
            context$3$0.t0 = context$3$0['catch'](0);

            (0, _assert2['default'])(context$3$0.t0);
            _assert2['default'].equal(context$3$0.t0.statusCode, 400);

          case 10:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this, [[0, 6]]);
    });
  });
  describe('User Basic ', function () {
    before(function callee$2$0() {
      var res;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            client = _UsersMstroeckDevelopmentBeavrServerTestTestManager2['default'].client('alice');
            (0, _assert2['default'])(client);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(client.login());

          case 4:
            res = context$3$0.sent;

            (0, _assert2['default'])(res);

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should not list on all users', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.prev = 0;
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(client.get('v1/users'));

          case 3:
            (0, _assert2['default'])(false);
            context$3$0.next = 10;
            break;

          case 6:
            context$3$0.prev = 6;
            context$3$0.t0 = context$3$0['catch'](0);

            (0, _assert2['default'])(context$3$0.t0);
            _assert2['default'].equal(context$3$0.t0.statusCode, 401);

          case 10:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this, [[0, 6]]);
    });
  });
});