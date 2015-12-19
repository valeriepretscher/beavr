'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = PassportMiddleware;

var _koaPassport = require('koa-passport');

var _koaPassport2 = _interopRequireDefault(_koaPassport);

var log = require('logfilename')(__filename);

function PassportMiddleware(app, kaoApp /*, config*/) {
  kaoApp.use(_koaPassport2['default'].initialize());
  kaoApp.use(_koaPassport2['default'].session());

  var models = app.data.sequelize.models;

  return {
    isAuthenticated: function isAuthenticated(context, next) {
      log.debug("isAuthenticated ", context.request.url);
      if (!context.isAuthenticated()) {
        log.info("isAuthenticated KO: ", context.request.url);
        context.status = 401;
        context.body = "Unauthorized";
      } else {
        return next();
      }
    },
    isAuthorized: function isAuthorized(context, next) {
      var request, routePath, userId, method, authorized;
      return _regeneratorRuntime.async(function isAuthorized$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            request = context.request;

            if (!context.passport.user) {
              log.warn("isAuthorized user not set");
              context.status = 401;
              context.body = "Unauthorized";
            }

            //TODO /api/v1 should be configurable
            routePath = context.route.path.replace(/^(\/api\/v1)/, "");
            userId = context.passport.user.id;
            method = request.method;

            log.info('isAuthorized: who:' + userId + ', resource:' + routePath + ', method: ' + method);

            context$2$0.prev = 6;
            context$2$0.next = 9;
            return _regeneratorRuntime.awrap(models.User.checkUserPermission(userId, routePath, method));

          case 9:
            authorized = context$2$0.sent;

            log.info("isAuthorized ", authorized);

            if (!authorized) {
              context$2$0.next = 15;
              break;
            }

            return context$2$0.abrupt('return', next());

          case 15:
            context.status = 401;

          case 16:
            context$2$0.next = 21;
            break;

          case 18:
            context$2$0.prev = 18;
            context$2$0.t0 = context$2$0['catch'](6);

            log.error("isAuthorized: ", context$2$0.t0);

          case 21:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this, [[6, 18]]);
    }
  };
}

module.exports = exports['default'];