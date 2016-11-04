define(function (require, exports, module) {
  var $ = require('jquery');
  var Backbone = require('backbone');
  var RegisterTemplate = require('template!../../templates/register');
  var UserModel = require('../models/user');
  var app = require('app');

  module.exports = Backbone.View.extend({
    events: {
      'click #ok': 'doRegister',
      'click #cancel': 'doCancel'
    },

    doRegister: function (e) {
      e.preventDefault();

      var data = {
        name: $('#name').val(),
        email: $('#email').val(),
        password: $('#password').val(),
        gsm: $('#gsm').val(),
        role: $('#role').val()
      };

      var user = new UserModel();
      user.save(data, {
        success: function (model, response) {
          //
        },
        error: function (model, error) {
          //
        }
      });
    },

    doCancel: function (e) {
      e.preventDefault();
      app.router.navigate('/', true);
    },

    render: function () {
      $(this.el).html(RegisterTemplate({}));
    }
  });
});
