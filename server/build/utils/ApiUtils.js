'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.validateJson = validateJson;

var _jsonschema = require('jsonschema');

var _jsonschema2 = _interopRequireDefault(_jsonschema);

var validator = new _jsonschema2['default'].Validator();
var validate = validator.validate.bind(validator);

function validateJson(json, schema) {
    var result = validate(json, schema);
    if (!result.errors.length) return true;

    throw {
        name: 'BadRequest',
        message: 'Request is invalid',
        validation: result.errors
    };
}