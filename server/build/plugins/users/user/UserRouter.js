'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.UserHttpController = UserHttpController;
exports['default'] = UserRouter;

var _koa66 = require('koa-66');

var _koa662 = _interopRequireDefault(_koa66);

var _UserApi = require('./UserApi');

var _UserApi2 = _interopRequireDefault(_UserApi);

var log = require('logfilename')(__filename);

function UserHttpController(app) {
  log.debug("UserHttpController");
  var userApi = (0, _UserApi2['default'])(app);
  var respond = app.utils.http.respond;
  return {
    getAll: function getAll(context) {
      return _regeneratorRuntime.async(function getAll$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', respond(context, userApi, userApi.getAll, [context.querystring]));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },
    getOne: function getOne(context) {
      var userId;
      return _regeneratorRuntime.async(function getOne$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            userId = context.params.id;
            return context$2$0.abrupt('return', respond(context, userApi, userApi.getOne, [userId]));

          case 2:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  };
}

function UserRouter(app) /*auth*/{
  var router = new _koa662['default']();
  var userHttpController = UserHttpController(app);

  router.use(app.server.auth.isAuthenticated);
  router.use(app.server.auth.isAuthorized);

  router.get('/', userHttpController.getAll);
  router.get('/:id', userHttpController.getOne);

  app.server.baseRouter().mount("/users", router);
  return router;
}