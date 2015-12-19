'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.verifyLogin = verifyLogin;
exports.register = register;

var _passportLocal = require('passport-local');

var log = require('logfilename')(__filename);

function verifyLogin(models, username, password) {
  var user, result;
  return _regeneratorRuntime.async(function verifyLogin$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        log.debug("loginStrategy username: ", username);
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(models.User.find({
          where: {
            $or: [{ email: username }, { username: username }]
          }
        }));

      case 3:
        user = context$1$0.sent;

        if (user) {
          context$1$0.next = 7;
          break;
        }

        log.info("userBasic invalid username user: ", username);
        return context$1$0.abrupt('return', {
          error: {
            message: 'InvalidUsernameOrPassword'
          }
        });

      case 7:
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(user.comparePassword(password));

      case 9:
        result = context$1$0.sent;

        if (!result) {
          context$1$0.next = 15;
          break;
        }

        log.debug("userBasic valid password for user: ", user.toJSON());
        return context$1$0.abrupt('return', {
          user: user.toJSON()
        });

      case 15:
        log.info("userBasic invalid password user: ", user.get());
        return context$1$0.abrupt('return', {
          error: {
            message: 'InvalidUsernameOrPassword'
          }
        });

      case 17:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function register(passport, models) {
  log.debug("register");
  var loginStrategy = new _passportLocal.Strategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: false
  }, function callee$1$0(username, password, done) {
    var res;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.prev = 0;
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(verifyLogin(models, username, password));

        case 3:
          res = context$2$0.sent;

          done(res.err, res.user);
          context$2$0.next = 10;
          break;

        case 7:
          context$2$0.prev = 7;
          context$2$0.t0 = context$2$0['catch'](0);

          done(context$2$0.t0);

        case 10:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this, [[0, 7]]);
  });

  passport.use('local', loginStrategy);
}

;

//log.info("userBasic user: ", user.get());