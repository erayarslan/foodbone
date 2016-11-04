define(function (require, exports, module) {
  var $ = require('jquery');
  var Backbone = require('backbone');
  var LoginTemplate = require('template!../../templates/login');
  var app = require('app');
  var cache = require('cache');

  module.exports = Backbone.View.extend({
    events: {
      'click #ok': 'doLogin',
      'click #cancel': 'doCancel'
    },

    doLogin: function (e) {
      e.preventDefault();
      cache.trigger('auth-true');
      app.router.navigate('/', true);
    },

    doCancel: function (e) {
      e.preventDefault();
      cache.trigger('auth-false');
      app.router.navigate('/', true);
    },

    render: function () {
      $(this.el).html(LoginTemplate({}));
    }
  });
});
