'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _bcrypt = require("bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

module.exports = function (sequelize, DataTypes) {
  var UserPending = sequelize.define('UserPending', {
    username: DataTypes.STRING(64),
    email: DataTypes.STRING(64),
    password: DataTypes.STRING(64),
    passwordHash: DataTypes.STRING,
    code: DataTypes.TEXT(16)
  }, {
    tableName: "user_pendings",
    classMethods: {}
  });

  var hashPasswordHook = function hashPasswordHook(instance, options, done) {
    if (!instance.changed('password')) {
      return done();
    }
    _bcrypt2['default'].hash(instance.get('password'), 10, function (err, hash) {
      if (err) {
        return done(err);
      }
      instance.set('password', '');
      instance.set('passwordHash', hash);
      done();
    });
  };

  UserPending.beforeValidate(hashPasswordHook);
  UserPending.beforeUpdate(hashPasswordHook);

  return UserPending;
};