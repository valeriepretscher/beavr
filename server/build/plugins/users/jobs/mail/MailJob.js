'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = MailJob;

var _rabbitmqPubsub = require('rabbitmq-pubsub');

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var log = require('logfilename')(__filename);

function MailJob(config) {
  var subscriber = createSubscriber(config);
  log.debug("MailJob options: ", config.mail);
  var transporter = undefined;
  if (config.mail && config.mail.smtp) {
    transporter = _nodemailer2['default'].createTransport(config.mail.smtp);
  } else {
    log.warn("no mail configuration");
  }

  return {
    start: function start() {
      return _regeneratorRuntime.async(function start$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            log.info('start');
            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(subscriber.start(this._onIncomingMessage.bind(this)));

          case 3:
            log.info('started');

          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },

    stop: function stop() {
      return _regeneratorRuntime.async(function stop$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            log.info('stop');
            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(subscriber.stop());

          case 3:
            log.info('stopped');

          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },

    getTemplate: function getTemplate(type) {
      var filename;
      return _regeneratorRuntime.async(function getTemplate$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            filename = _path2['default'].join(_path2['default'].dirname(__filename), 'templates', type + '.html');
            return context$2$0.abrupt('return', new _Promise(function (resolve, reject) {
              _fs2['default'].readFile(filename, "utf8", function (error, data) {
                if (error) {
                  reject(error);
                } else {
                  resolve(data);
                }
              });
            }));

          case 2:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },

    _sendEmail: function _sendEmail(type, user) {
      var locals, template, html, lines, subject, body, mailOptions;
      return _regeneratorRuntime.async(function _sendEmail$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            log.info("sendEmail %s to user ", type, user);

            if (user.email) {
              context$2$0.next = 4;
              break;
            }

            log.error("email not set");
            throw { name: "email not set" };

          case 4:
            if (user.code) {
              context$2$0.next = 7;
              break;
            }

            log.error("token not set");
            throw { name: "token not set" };

          case 7:
            locals = {
              code: user.code,
              websiteUrl: config.websiteUrl,
              signature: config.mail.signature
            };
            context$2$0.next = 10;
            return _regeneratorRuntime.awrap(this.getTemplate(type));

          case 10:
            template = context$2$0.sent;
            html = _ejs2['default'].render(template, locals);
            lines = html.split('\n');
            subject = lines[0];
            body = lines.slice(1).join('\n');
            mailOptions = {
              from: config.mail.from,
              to: user.email,
              subject: subject,
              html: body
            };

            log.debug("_sendEmail: ", _lodash2['default'].omit(mailOptions, 'html'));

            return context$2$0.abrupt('return', new _Promise(function (resolve, reject) {
              transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                  log.error("cannot send mail: ", error);
                  reject(error);
                } else {
                  delete info.html;
                  log.debug("mail sent: ", info);
                  resolve(info);
                }
              });
            }));

          case 18:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    },

    _onIncomingMessage: function _onIncomingMessage(message) {
      var user;
      return _regeneratorRuntime.async(function _onIncomingMessage$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            log.info("onIncomingMessage content: ", message.content.toString());
            log.info("onIncomingMessage fields: ", JSON.stringify(message.fields));
            user = undefined;

            if (transporter) {
              context$2$0.next = 7;
              break;
            }

            log.error("not configured");
            subscriber.ack(message);
            return context$2$0.abrupt('return');

          case 7:
            context$2$0.prev = 7;

            user = JSON.parse(message.content.toString());
            context$2$0.next = 16;
            break;

          case 11:
            context$2$0.prev = 11;
            context$2$0.t0 = context$2$0['catch'](7);

            log.error("cannot convert message");
            subscriber.ack(message);
            return context$2$0.abrupt('return');

          case 16:
            context$2$0.prev = 16;
            context$2$0.next = 19;
            return _regeneratorRuntime.awrap(this._sendEmail(message.fields.routingKey, user));

          case 19:
            log.info("email sent");
            subscriber.ack(message);
            context$2$0.next = 28;
            break;

          case 23:
            context$2$0.prev = 23;
            context$2$0.t1 = context$2$0['catch'](16);

            log.error("error sending mail: ", context$2$0.t1);
            // TODO nack or ack ?
            subscriber.ack(message);
            return context$2$0.abrupt('return');

          case 28:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this, [[7, 11], [16, 23]]);
    }
  };
}

var subscriberOptions = {
  exchange: 'user',
  queueName: 'mail',
  routingKeys: ['user.registering', 'user.resetpassword']
};

function createSubscriber(config) {
  var rabbitmq = config.rabbitmq;
  if (rabbitmq && rabbitmq.url) {
    subscriberOptions.url = rabbitmq.url;
  }
  log.info("createSubscriber: ", subscriberOptions);
  return new _rabbitmqPubsub.Subscriber(subscriberOptions);
}
module.exports = exports['default'];

//log.debug("filename", filename);