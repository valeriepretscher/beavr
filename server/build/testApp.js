'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

describe('App', function () {
  var _this = this;

  before(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  after(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  beforeEach(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });

  it('displayInfoEnv', function callee$1$0() {
    var app;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          app = (0, _app2['default'])();

          app.displayInfoEnv();

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('start and stop ok', function callee$1$0() {
    var app;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          app = (0, _app2['default'])();
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(app.start());

        case 3:
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(app.stop());

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('start and stop with empty NODE_CONFIG', function callee$1$0() {
    var app;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          process.env['NODE_CONFIG'] = '{}';
          app = (0, _app2['default'])();

          app.displayInfoEnv();

        case 3:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});