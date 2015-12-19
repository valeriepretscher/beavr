'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _UsersMstroeckDevelopmentBeavrServerTestTestManager = require('/Users/mstroeck/Development/beavr/server/test/testManager');

var _UsersMstroeckDevelopmentBeavrServerTestTestManager2 = _interopRequireDefault(_UsersMstroeckDevelopmentBeavrServerTestTestManager);

describe('Ticket', function () {
    var _this = this;

    var client = undefined;
    before(function callee$1$0() {
        return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    context$2$0.next = 2;
                    return _regeneratorRuntime.awrap(_UsersMstroeckDevelopmentBeavrServerTestTestManager2['default'].start());

                case 2:
                    client = _UsersMstroeckDevelopmentBeavrServerTestTestManager2['default'].client('alice');
                    (0, _assert2['default'])(client);
                    //await client.login();

                case 4:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, _this);
    });
    after(function callee$1$0() {
        return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    context$2$0.next = 2;
                    return _regeneratorRuntime.awrap(_UsersMstroeckDevelopmentBeavrServerTestTestManager2['default'].stop());

                case 2:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, _this);
    });

    it('should get all tickets', function callee$1$0() {
        var tickets;
        return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    context$2$0.next = 2;
                    return _regeneratorRuntime.awrap(client.get('v1/ticket'));

                case 2:
                    tickets = context$2$0.sent;

                    (0, _assert2['default'])(tickets);

                case 4:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, _this);
    });
});