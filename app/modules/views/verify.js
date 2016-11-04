define(function (require, exports, module) {
  var $ = require('jquery');
  var Backbone = require('backbone');
  var VerifyTemplate = require('template!../../templates/verify');
  var app = require('app');
  var utils = require('utils');

  module.exports = Backbone.View.extend({
    events: {
      'click #m_verify': 'handleMobileVerifyClick',
      'click #w_verify': 'handleWebVerifyClick',
      'keyup #email': 'handleWebVerifyEnter',
      'keyup #password': 'handleWebVerifyEnter',
      'keyup #gsm': 'handleMobileVerifyEnter'
    },

    initialize: function () {
    },

    doMobileVerify: function () {
      app.router.navigate('/sms', true);
    },

    doWebVerify: function () {
      var obj = utils.tost.get('food');
      obj.userId = 1;
      utils.tost.set('food', obj);

      app.router.navigate('/address', true);
    },

    handleMobileVerifyClick: function (e) {
      e.preventDefault();
      this.doMobileVerify();
    },

    handleWebVerifyClick: function (e) {
      e.preventDefault();
      this.doWebVerify();
    },

    handleMobileVerifyEnter: function (e) {
      e.preventDefault();
      if (e.keyCode === 13) {
        this.doMobileVerify();
      }
    },

    handleWebVerifyEnter: function (e) {
      e.preventDefault();
      if (e.keyCode === 13) {
        this.doWebVerify();
      }
    },

    render: function () {
      $(this.el).html(VerifyTemplate({}));
    }
  });
});
