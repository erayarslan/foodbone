define(function (require, exports, module) {
  var $ = require('jquery');
  var Backbone = require('backbone');
  var OrdersTemplate = require('template!../../templates/orders');
  var app = require('app');

  module.exports = Backbone.View.extend({
    events: {},

    initialize: function () {
    },

    render: function () {
      $(this.el).html(OrdersTemplate({}));
    }
  });
});
