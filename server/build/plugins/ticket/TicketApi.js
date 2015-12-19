'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var log = require('logfilename')(__filename);

exports['default'] = function (app) {
  var sequelize = app.data.sequelize;
  var models = sequelize.models;

  sequelize['import'](_path2['default'].join(__dirname, './TicketModel'));

  return {
    getAll: function getAll() {
      var tickets;
      return _regeneratorRuntime.async(function getAll$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap(models.Ticket.findAll());

          case 2:
            tickets = context$2$0.sent;

            log.debug("getAll: ", tickets);
            return context$2$0.abrupt('return', tickets);

          case 5:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  };
};

module.exports = exports['default'];