'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = ticketPlugin;

var _TicketRouter = require('./TicketRouter');

var _TicketRouter2 = _interopRequireDefault(_TicketRouter);

function ticketPlugin(app) {

  app.data.registerModel(__dirname, 'TicketModel');

  (0, _TicketRouter2['default'])(app, app.server.auth);
  return {
    start: function start() {
      return _regeneratorRuntime.async(function start$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },
    stop: function stop() {
      return _regeneratorRuntime.async(function stop$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  };
}

module.exports = exports['default'];