'use strict';

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Data;
var _ = require('lodash');
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var log = require('logfilename')(__filename);

function Data(config) {
  var dbConfig = config.db;
  var sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, dbConfig);
  var modelsMap = {};

  var data = {
    sequelize: sequelize,
    Sequelize: Sequelize,
    registerModelsFromDir: function registerModelsFromDir(baseDir, name) {
      log.debug('registerModelFromDir: ' + baseDir + ' in ' + name);
      var dirname = path.join(baseDir, name);
      fs.readdirSync(dirname).filter(function (file) {
        return file.indexOf('.') !== 0 && file.slice(-3) === '.js';
      }).forEach(function (file) {
        log.debug("model file: ", file);
        data.registerModel(dirname, file);
      });
    },

    registerModel: function registerModel(dirname, modelFile) {
      log.debug("registerModel ", modelFile);
      var model = sequelize['import'](path.join(dirname, modelFile));
      modelsMap[model.name] = model;
    },

    associate: function associate() {
      log.debug("associate");
      _Object$keys(modelsMap).forEach(function (modelName) {
        if (modelsMap[modelName].associate) {
          modelsMap[modelName].associate(modelsMap);
        }
      });
    },
    models: function models() {
      return sequelize.models;
    },
    queryStringToFilter: function queryStringToFilter(qs, orderBy) {
      if (qs === undefined) qs = {};

      var filter = {
        offset: qs.offset,
        limit: qs.limit,
        order: qs.order ? orderBy + " " + qs.order : undefined
      };
      return filter;
    },
    start: function start(app) {
      var option;
      return _regeneratorRuntime.async(function start$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            log.info("db start");
            option = {
              force: false
            };
            context$2$0.next = 4;
            return _regeneratorRuntime.awrap(sequelize.sync(option));

          case 4:
            context$2$0.next = 6;
            return _regeneratorRuntime.awrap(this.seedIfEmpty(app));

          case 6:
            log.info("db started");

          case 7:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },

    stop: function stop() {
      return _regeneratorRuntime.async(function stop$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            log.info("db stop");

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },

    seed: function seed(app) {
      var option;
      return _regeneratorRuntime.async(function seed$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            log.info("seed");
            option = {
              force: true
            };
            context$2$0.next = 4;
            return _regeneratorRuntime.awrap(sequelize.sync(option));

          case 4:
            context$2$0.next = 6;
            return _regeneratorRuntime.awrap(this.seedDefault(app));

          case 6:
            log.info("seeded");

          case 7:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },

    seedDefault: function seedDefault(app) {
      var plugins, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, plugin;

      return _regeneratorRuntime.async(function seedDefault$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            log.debug("seedDefault");
            assert(app.plugins.get().users);
            plugins = _.values(app.plugins.get());
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            context$2$0.prev = 6;
            _iterator = _getIterator(plugins);

          case 8:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              context$2$0.next = 17;
              break;
            }

            plugin = _step.value;

            log.debug("seedDefault plugin");

            if (!_.isFunction(plugin.seedDefault)) {
              context$2$0.next = 14;
              break;
            }

            context$2$0.next = 14;
            return _regeneratorRuntime.awrap(plugin.seedDefault());

          case 14:
            _iteratorNormalCompletion = true;
            context$2$0.next = 8;
            break;

          case 17:
            context$2$0.next = 23;
            break;

          case 19:
            context$2$0.prev = 19;
            context$2$0.t0 = context$2$0['catch'](6);
            _didIteratorError = true;
            _iteratorError = context$2$0.t0;

          case 23:
            context$2$0.prev = 23;
            context$2$0.prev = 24;

            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }

          case 26:
            context$2$0.prev = 26;

            if (!_didIteratorError) {
              context$2$0.next = 29;
              break;
            }

            throw _iteratorError;

          case 29:
            return context$2$0.finish(26);

          case 30:
            return context$2$0.finish(23);

          case 31:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this, [[6, 19, 23, 31], [24,, 26, 30]]);
    },
    seedIfEmpty: function seedIfEmpty(app) {
      var count;
      return _regeneratorRuntime.async(function seedIfEmpty$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            log.info("seedIfEmpty");
            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(sequelize.models.User.count());

          case 3:
            count = context$2$0.sent;

            if (!(count > 0)) {
              context$2$0.next = 8;
              break;
            }

            log.info("seedIfEmpty #users: ", count);
            context$2$0.next = 9;
            break;

          case 8:
            return context$2$0.abrupt('return', this.seedDefault(app));

          case 9:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  };
  return data;
}

;
module.exports = exports['default'];