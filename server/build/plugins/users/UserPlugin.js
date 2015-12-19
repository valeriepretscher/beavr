'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = UserPlugin;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _logfilename = require('logfilename');

var _logfilename2 = _interopRequireDefault(_logfilename);

var _rabbitmqPubsub = require('rabbitmq-pubsub');

var _PassportAuth = require('./PassportAuth');

var _PassportAuth2 = _interopRequireDefault(_PassportAuth);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

// Jobs

var _jobsMailMailJob = require('./jobs/mail/MailJob');

var _jobsMailMailJob2 = _interopRequireDefault(_jobsMailMailJob);

var _meMeRouter = require('./me/MeRouter');

var _meMeRouter2 = _interopRequireDefault(_meMeRouter);

var _userUserRouter = require('./user/UserRouter');

var _userUserRouter2 = _interopRequireDefault(_userUserRouter);

var _authenticationAuthenticationRouter = require('./authentication/AuthenticationRouter');

var _authenticationAuthenticationRouter2 = _interopRequireDefault(_authenticationAuthenticationRouter);

var log = new _logfilename2['default'](__filename);

var publisherOption = { exchange: "user" };

function UserPlugin(app) {

  app.data.registerModelsFromDir(__dirname, './models');

  var publisher = createPublisher();
  setupAuthentication(app, publisher);

  setupRouter(app, publisher);

  var models = app.data.models();

  var mailJob = (0, _jobsMailMailJob2['default'])(_config2['default']);

  var startStop = [mailJob, publisher];

  return {
    publisher: publisher,
    start: function start() {
      return _regeneratorRuntime.async(function start$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap(_bluebird2['default'].each(startStop, function (obj) {
              return obj.start(app);
            }));

          case 2:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },

    stop: function stop() {
      return _regeneratorRuntime.async(function stop$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap(_bluebird2['default'].each(startStop, function (obj) {
              return obj.stop(app);
            }));

          case 2:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },

    seedDefault: function seedDefault() {
      var seedDefaultFns = [models.Group.seedDefault, models.User.seedDefault, models.Permission.seedDefault, models.GroupPermission.seedDefault];
      return _bluebird2['default'].each(seedDefaultFns, function (fn) {
        return fn();
      });
    },

    isSeeded: function isSeeded() {
      var count;
      return _regeneratorRuntime.async(function isSeeded$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap(models.User.count());

          case 2:
            count = context$2$0.sent;

            log.debug("#users ", count);
            return context$2$0.abrupt('return', count);

          case 5:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  };
}

function setupRouter(app, publisherUser) {
  //Authentication
  (0, _authenticationAuthenticationRouter2['default'])(app, publisherUser);

  //Me
  (0, _meMeRouter2['default'])(app);

  //Users
  (0, _userUserRouter2['default'])(app);
}

function createPublisher() {
  var rabbitmq = _config2['default'].rabbitmq;
  if (rabbitmq && rabbitmq.url) {
    publisherOption.url = rabbitmq.url;
  }

  log.info("createPublisher: ", publisherOption);
  return new _rabbitmqPubsub.Publisher(publisherOption);
}

function setupAuthentication(app, publisherUser) {
  var auth = new _PassportAuth2['default'](app, publisherUser);
  app.auth = auth;
  return auth;
}
module.exports = exports['default'];