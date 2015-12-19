'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _restauth = require('restauth');

var _UsersMstroeckDevelopmentBeavrServerTestTestManager = require('/Users/mstroeck/Development/beavr/server/test/testManager');

var _UsersMstroeckDevelopmentBeavrServerTestTestManager2 = _interopRequireDefault(_UsersMstroeckDevelopmentBeavrServerTestTestManager);

var assert = require('assert');

var chance = require('chance')();;

describe('UserRegister', function () {
  var _this = this;

  var app = _UsersMstroeckDevelopmentBeavrServerTestTestManager2['default'].app;
  var models = app.data.sequelize.models;
  var client = undefined;
  var sandbox = undefined;

  before(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(_UsersMstroeckDevelopmentBeavrServerTestTestManager2['default'].start());

        case 2:
          sandbox = _sinon2['default'].sandbox.create();
          assert(app.plugins);
          _sinon2['default'].stub(app.plugins.get().users.publisher, "publish", function (key, msg) {
            //console.log("publish has been called");
            //assert.equal(key, "user.registered");
            assert(msg);
          });

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  after(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          sandbox.restore();
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(_UsersMstroeckDevelopmentBeavrServerTestTestManager2['default'].stop());

        case 3:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });

  beforeEach(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          client = new _restauth.Client();

        case 1:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });

  function createUsernameRandom() {
    var username = chance.name();
    return username;
  }

  it('shoud register a user', function callee$1$0() {
    var username, userConfig, res, userPending, user, loginParam, loginRes;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          username = createUsernameRandom();
          userConfig = {
            username: username,
            password: 'password',
            email: username + "@mail.com"
          };
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(client.post('v1/auth/register', userConfig));

        case 4:
          res = context$2$0.sent;

          assert(res);
          assert(res.success);
          context$2$0.next = 9;
          return _regeneratorRuntime.awrap(models.UserPending.find({
            where: {
              email: userConfig.email
            }
          }));

        case 9:
          res = context$2$0.sent;

          assert(res);
          userPending = res.get();

          assert(userPending.username, userConfig.username);
          assert(userPending.email, userConfig.email);
          assert(userPending.code);

          context$2$0.prev = 15;
          context$2$0.next = 18;
          return _regeneratorRuntime.awrap(client.get('v1/me'));

        case 18:
          assert(false);
          context$2$0.next = 24;
          break;

        case 21:
          context$2$0.prev = 21;
          context$2$0.t0 = context$2$0['catch'](15);

          assert(context$2$0.t0);

        case 24:
          context$2$0.next = 26;
          return _regeneratorRuntime.awrap(client.post('v1/auth/verify_email_code', { code: userPending.code }));

        case 26:
          context$2$0.next = 28;
          return _regeneratorRuntime.awrap(models.User.find({
            where: {
              email: userConfig.email
            }
          }));

        case 28:
          res = context$2$0.sent;

          assert(res);
          user = res.get();

          assert(user.username, userConfig.username);
          assert(user.email, userConfig.email);
          //console.log("user password ", user.password);

          //The user shoud no longer be in the user_pendings table
          context$2$0.next = 35;
          return _regeneratorRuntime.awrap(models.UserPending.find({
            where: {
              email: userConfig.email
            }
          }));

        case 35:
          res = context$2$0.sent;

          assert(!res);

          // Should login now
          loginParam = {
            password: userConfig.password,
            username: userConfig.email
          };
          context$2$0.next = 40;
          return _regeneratorRuntime.awrap(client.login(loginParam));

        case 40:
          loginRes = context$2$0.sent;

          assert(loginRes);
          //console.log(loginRes);

        case 42:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this, [[15, 21]]);
  });
  it('invalid email code', function callee$1$0(done) {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.prev = 0;
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(client.post('v1/auth/verify_email_code', { code: "1234567890123456" }));

        case 3:
          context$2$0.next = 10;
          break;

        case 5:
          context$2$0.prev = 5;
          context$2$0.t0 = context$2$0['catch'](0);

          assert.equal(context$2$0.t0.statusCode, 422);
          assert.equal(context$2$0.t0.body.name, "NoSuchCode");
          done();

        case 10:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this, [[0, 5]]);
  });
  it('malformed email code', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.prev = 0;
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(client.post('v1/auth/verify_email_code', { code: "123456789012345" }));

        case 3:
          assert(false);
          context$2$0.next = 10;
          break;

        case 6:
          context$2$0.prev = 6;
          context$2$0.t0 = context$2$0['catch'](0);

          assert.equal(context$2$0.t0.statusCode, 400);
          assert.equal(context$2$0.t0.body.validation[0].stack, "instance.code does not meet minimum length of 16");

        case 10:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this, [[0, 6]]);
  });
  it('invalid register username too short', function callee$1$0() {
    var registerDataKo;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          registerDataKo = { username: "aa", password: "aaaaaa" };
          context$2$0.prev = 1;
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(client.post('v1/auth/register', registerDataKo));

        case 4:
          assert(false);
          context$2$0.next = 12;
          break;

        case 7:
          context$2$0.prev = 7;
          context$2$0.t0 = context$2$0['catch'](1);

          console.log(context$2$0.t0.body);
          assert.equal(context$2$0.t0.statusCode, 400);
          assert.equal(context$2$0.t0.body.validation[0].stack, 'instance.username does not meet minimum length of 3');

        case 12:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this, [[1, 7]]);
  });
  it('shoud register twice a user', function callee$1$0() {
    var username, userConfig, res;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          username = createUsernameRandom();
          userConfig = {
            username: username,
            password: 'password',
            email: username + "@mail.com"
          };
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(client.post('v1/auth/register', userConfig));

        case 4:
          res = context$2$0.sent;

          assert(res);
          assert(res.success);
          assert.equal(res.message, "confirm email");
          context$2$0.next = 10;
          return _regeneratorRuntime.awrap(client.post('v1/auth/register', userConfig));

        case 10:
          res = context$2$0.sent;

          assert(res);
          assert(res.success);
          assert.equal(res.message, "confirm email");

        case 14:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});