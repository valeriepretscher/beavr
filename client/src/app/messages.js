// This is essentially bulk require to load all the language strings

var req = require.context('../locale', true, /\.json.*$/);
let messages = {};

req.keys().forEach(function (file) {
  var locale = file.replace('./', '').replace('.json', '');
  messages[locale] = req(file);
});

export default messages;
