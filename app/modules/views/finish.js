define(function (require, exports, module) {
  var $ = require('jquery');
  var Backbone = require('backbone');
  var FinishTemplate = require('template!../../templates/finish');
  var app = require('app');

  module.exports = Backbone.View.extend({
    events: {
      'click #trace': 'handleTraceClick',
      'click #home': 'handleHomeClick'
    },

    initialize: function () {
    },

    handleTraceClick: function (e) {
      e.preventDefault();
      app.router.navigate('/orders', true);
    },

    handleHomeClick: function (e) {
      e.preventDefault();
      app.router.navigate('/', true);
    },

    render: function () {
      $(this.el).html(FinishTemplate({}));
    }
  });
});
