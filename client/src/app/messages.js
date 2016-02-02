// This is essentially bulk require to load all the language strings

var req = require.context('../locale', true, /\.json.*$/);
var exports = {};

req.keys().forEach(function (file) {
  var locale = file.replace('./', '').replace('.json', '');
  exports[locale] = req(file);
});

module.exports = exports;
