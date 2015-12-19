'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.TicketHttpController = TicketHttpController;
exports['default'] = TicketRouter;

var _koa66 = require('koa-66');

var _koa662 = _interopRequireDefault(_koa66);

var _TicketApi = require('./TicketApi');

var _TicketApi2 = _interopRequireDefault(_TicketApi);

var log = require('logfilename')(__filename);

function TicketHttpController(app) {
  log.debug("TicketHttpController");
  var ticketApi = (0, _TicketApi2['default'])(app);
  var respond = app.utils.http.respond;
  return {
    getAll: function getAll(context) {
      return _regeneratorRuntime.async(function getAll$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', respond(context, ticketApi, ticketApi.getAll, [context.querystring]));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  };
}

function TicketRouter(app) /*auth*/{
  var router = new _koa662['default']();
  var ticketHttpController = TicketHttpController(app);
  router.get('/', ticketHttpController.getAll);
  //router.get('/:id', ticketHttpController.getOne);
  app.server.baseRouter().mount("/ticket", router);
  return router;
}