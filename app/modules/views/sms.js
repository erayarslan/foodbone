define(function (require, exports, module) {
  var $ = require('jquery');
  var Backbone = require('backbone');
  var SmsTemplate = require('template!../../templates/sms');
  var app = require('app');
  var utils = require('utils');

  module.exports = Backbone.View.extend({
    events: {
      'click #c_verify': 'handleCVerifyClick',
      'click #send_again': 'handleSendAgainClick'
    },

    initialize: function () {
    },

    handleCVerifyClick: function (e) {
      e.preventDefault();

      var obj = utils.tost.get('food');
      obj.userId = 1;
      utils.tost.set('food', obj);

      app.router.navigate('/address', true);
    },

    handleSendAgainClick: function (e) {
      e.preventDefault();
    },

    render: function () {
      $(this.el).html(SmsTemplate({}));
    }
  });
});
