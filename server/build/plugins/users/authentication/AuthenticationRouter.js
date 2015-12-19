'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.AuthenticationHttpController = AuthenticationHttpController;
exports['default'] = AuthenticationRouter;

var _koa66 = require('koa-66');

var _koa662 = _interopRequireDefault(_koa66);

var _koaPassport = require('koa-passport');

var _koaPassport2 = _interopRequireDefault(_koaPassport);

var _AuthenticationApi = require('./AuthenticationApi');

var _AuthenticationApi2 = _interopRequireDefault(_AuthenticationApi);

var log = require('logfilename')(__filename);

function AuthenticationHttpController(app, publisherUser) {
  log.debug("AuthenticationHttpController");
  var authApi = (0, _AuthenticationApi2['default'])(app, publisherUser);
  var respond = app.utils.http.respond;
  return {
    login: function login(ctx, next) {
      return _koaPassport2['default'].authenticate('local', function (user, info) {
        log.debug("login %s, %s", JSON.stringify(user), info);
        if (user) {
          ctx.body = user;
          ctx.login(user, function (error) {
            if (error) {
              log.error("login ", error);
              throw error;
            } else {
              log.debug("login ok ");
            }
          });
        } else {
          ctx.status = 401;
          ctx.body = {
            success: false
          };
        }
      })(ctx, next);
    },
    logout: function logout(ctx) {
      log.debug("logout");
      ctx.logout();
      ctx.body = {
        success: true
      };
    },
    register: function register(context) {
      return _regeneratorRuntime.async(function register$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', respond(context, authApi, authApi.createPending, [context.request.body]));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },
    verifyEmailCode: function verifyEmailCode(context) {
      return _regeneratorRuntime.async(function verifyEmailCode$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', respond(context, authApi, authApi.verifyEmailCode, [context.request.body]));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },
    resetPassword: function resetPassword(context) {
      return _regeneratorRuntime.async(function resetPassword$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', respond(context, authApi, authApi.resetPassword, [context.request.body]));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },
    verifyResetPasswordToken: function verifyResetPasswordToken(context) {
      return _regeneratorRuntime.async(function verifyResetPasswordToken$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', respond(context, authApi, authApi.verifyResetPasswordToken, [context.request.body]));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  };
}

function AuthenticationRouter(app, publisherUser) {
  var router = new _koa662['default']();
  var authHttpController = AuthenticationHttpController(app, publisherUser);
  router.post('/login', authHttpController.login);
  router.post('/logout', authHttpController.logout);
  router.post('/register', authHttpController.register);
  router.post('/reset_password', authHttpController.resetPassword);
  router.post('/verify_email_code', authHttpController.verifyEmailCode);
  router.post('/verify_reset_password_token', authHttpController.verifyResetPasswordToken);

  router.get('/facebook', _koaPassport2['default'].authenticate('facebook', { scope: ['email'] }));
  router.get('/facebook/callback', _koaPassport2['default'].authenticate('facebook', { failureRedirect: '/login', successRedirect: '/login' }));

  app.server.baseRouter().mount('auth', router);

  return router;
}