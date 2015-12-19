'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koa66 = require('koa-66');

var _koa662 = _interopRequireDefault(_koa66);

var config = require('config');
var Promise = require('bluebird');

var log = require('logfilename')(__filename);

exports['default'] = function (app) {
  var koaApp = new _koa2['default']();
  koaApp.experimental = true;

  var httpHandle = undefined;
  var rootRouter = new _koa662['default']();
  var _baseRouter = new _koa662['default']();
  middlewareInit(app, koaApp, config);

  return {
    koa: koaApp,
    auth: require('./middleware/PassportMiddleware')(app, koaApp, config),
    baseRouter: function baseRouter() {
      return _baseRouter;
    },
    mountRootRouter: function mountRootRouter() {
      rootRouter.mount('/api/v1', _baseRouter);
      koaApp.use(rootRouter.routes());
    },
    diplayRoutes: function diplayRoutes() {
      rootRouter.stacks.forEach(function (stack) {
        log.debug(stack.methods + ' : ' + stack.path);
      });
    },
    /**
     * Start the express server
     */
    start: function start() {
      var configHttp, port;
      return _regeneratorRuntime.async(function start$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            configHttp = config.get('http');
            port = process.env.PORT || configHttp.port;

            log.info('start koa on port %s', port);
            return context$2$0.abrupt('return', new Promise(function (resolve) {
              httpHandle = koaApp.listen(port, function () {
                log.info('koa server started');
                resolve();
              });
            }));

          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },

    /**
     * Stop the express server
     */
    stop: function stop() {
      return _regeneratorRuntime.async(function stop$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            log.info('stopping web server');

            if (httpHandle) {
              context$2$0.next = 4;
              break;
            }

            log.info('koa server is already stopped');
            return context$2$0.abrupt('return');

          case 4:
            return context$2$0.abrupt('return', new Promise(function (resolve) {
              httpHandle.close(function () {
                log.info('koa server is stopped');
                resolve();
              });
            }));

          case 5:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  };
};

;

function middlewareInit(app, koaApp, config) {
  var _this = this;

  log.debug("middlewareInit");
  var convert = require('koa-convert');
  var session = require('koa-generic-session');
  //TODO use secret from config
  koaApp.keys = ['your-super-session-secret'];
  koaApp.use(convert(session()));

  var bodyParser = require('koa-bodyparser');
  koaApp.use(bodyParser());

  koaApp.use(function callee$1$0(ctx, next) {
    var start, ms, util;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          start = new Date();

          log.debug(ctx.method + ' ' + ctx.url + ' begins');
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(next());

        case 4:
          ms = new Date() - start;

          log.debug(ctx.method + ' ' + ctx.url + ' ends in ' + ms + 'ms');
          util = require('util');

          log.debug(util.inspect(ctx));

        case 8:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
}
module.exports = exports['default'];