'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _logfilename = require('logfilename');

var _logfilename2 = _interopRequireDefault(_logfilename);

var _chance = require('chance');

var _chance2 = _interopRequireDefault(_chance);

var chance = new _chance2['default']();

exports['default'] = function (app, publisherUser) {
  var models = app.data.sequelize.models;
  var log = new _logfilename2['default'](__filename);
  var validateJson = app.utils.api.validateJson;
  return {
    createPending: function createPending(userPendingIn) {
      var user, code, userPendingOut;
      return _regeneratorRuntime.async(function createPending$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            validateJson(userPendingIn, require('./schema/createPending.json'));
            log.debug("createPending: ", userPendingIn);
            context$2$0.next = 4;
            return _regeneratorRuntime.awrap(models.User.findByEmail(userPendingIn.email));

          case 4:
            user = context$2$0.sent;

            if (user) {
              context$2$0.next = 16;
              break;
            }

            code = createToken();
            userPendingOut = {
              code: code,
              username: userPendingIn.username,
              email: userPendingIn.email,
              password: userPendingIn.password
            };

            log.info("createPending code ", userPendingOut.code);
            context$2$0.next = 11;
            return _regeneratorRuntime.awrap(models.UserPending.create(userPendingOut));

          case 11:
            delete userPendingOut.password;
            context$2$0.next = 14;
            return _regeneratorRuntime.awrap(publisherUser.publish("user.registering", JSON.stringify(userPendingOut)));

          case 14:
            context$2$0.next = 17;
            break;

          case 16:
            log.info("already registered", userPendingIn.email);

          case 17:
            return context$2$0.abrupt('return', {
              success: true,
              message: "confirm email"
            });

          case 18:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },
    verifyEmailCode: function verifyEmailCode(param) {
      var res, userPending, userToCreate, user;
      return _regeneratorRuntime.async(function verifyEmailCode$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            validateJson(param, require('./schema/verifyEmailCode.json'));
            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(models.UserPending.find({
              where: {
                code: param.code
              }
            }));

          case 3:
            res = context$2$0.sent;

            if (!res) {
              context$2$0.next = 19;
              break;
            }

            userPending = res.get();

            log.debug("verifyEmailCode: userPending: ", userPending);
            userToCreate = _lodash2['default'].pick(userPending, 'username', 'email', 'passwordHash');
            context$2$0.next = 10;
            return _regeneratorRuntime.awrap(models.User.createUserInGroups(userToCreate, ["User"]));

          case 10:
            user = context$2$0.sent;
            context$2$0.next = 13;
            return _regeneratorRuntime.awrap(models.UserPending.destroy({
              where: {
                code: param.code
              }
            }));

          case 13:
            log.debug("verifyEmailCode: user ", user.toJSON());
            context$2$0.next = 16;
            return _regeneratorRuntime.awrap(publisherUser.publish("user.registered", JSON.stringify(user.toJSON())));

          case 16:
            return context$2$0.abrupt('return', user.toJSON());

          case 19:
            log.warn("verifyEmailCode: no such code ", param.code);
            throw {
              code: 422,
              name: "NoSuchCode"
            };

          case 21:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },
    resetPassword: function resetPassword(payload) {
      var email, user, token, passwordReset, passwordResetPublished;
      return _regeneratorRuntime.async(function resetPassword$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            validateJson(payload, require('./schema/resetPassword.json'));
            email = payload.email;

            log.info("resetPassword: ", email);
            context$2$0.next = 5;
            return _regeneratorRuntime.awrap(models.User.findByEmail(email));

          case 5:
            user = context$2$0.sent;

            if (!user) {
              context$2$0.next = 18;
              break;
            }

            log.info("resetPassword: find user: ", user.get());
            token = createToken();
            passwordReset = {
              token: token,
              user_id: user.id
            };
            context$2$0.next = 12;
            return _regeneratorRuntime.awrap(models.PasswordReset.upsert(passwordReset));

          case 12:
            passwordResetPublished = {
              code: token,
              email: user.email
            };

            log.debug("resetPassword: publish: ", passwordResetPublished);
            context$2$0.next = 16;
            return _regeneratorRuntime.awrap(publisherUser.publish('user.resetpassword', JSON.stringify(passwordResetPublished)));

          case 16:
            context$2$0.next = 19;
            break;

          case 18:
            log.info("resetPassword: no such email: ", email);

          case 19:
            return context$2$0.abrupt('return', {
              success: true
            });

          case 20:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },
    verifyResetPasswordToken: function verifyResetPasswordToken(payload) {
      var token, password, user;
      return _regeneratorRuntime.async(function verifyResetPasswordToken$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            validateJson(payload, require('./schema/verifyResetPasswordToken.json'));
            token = payload.token;
            password = payload.password;

            log.info("verifyResetPasswordToken: ", token);
            // Has the token expired ?

            // find the user
            context$2$0.next = 6;
            return _regeneratorRuntime.awrap(models.User.find({
              include: [{
                model: models.PasswordReset,
                where: {
                  token: token
                }
              }]
            }));

          case 6:
            user = context$2$0.sent;

            log.info("verifyResetPasswordToken: password ", password);

            if (!user) {
              context$2$0.next = 14;
              break;
            }

            context$2$0.next = 11;
            return _regeneratorRuntime.awrap(user.update({ password: password }));

          case 11:
            return context$2$0.abrupt('return', {
              success: true
            });

          case 14:
            log.warn("verifyResetPasswordToken: no such token ", token);

            throw {
              code: 422,
              name: "TokenInvalid"
            };

          case 16:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  };
};

function createToken() {
  return chance.string({
    length: 16,
    pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  });
}
module.exports = exports['default'];

//TODO transaction

// send password reset email with the token.

//TODO delete token