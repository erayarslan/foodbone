define(function (require, exports, module) {
  var $ = require('jquery');
  var Backbone = require('backbone');
  var FoodTemplate = require('template!../../templates/food');
  var app = require('app');
  var utils = require('utils');

  module.exports = Backbone.View.extend({
    events: {
      'click #order-it': 'handleOrderItClick'
    },

    initialize: function () {
    },

    doOrder: function () {
      utils.tost.set('food', {id: this.foodId});
      app.router.navigate('/verify', true);
    },

    handleOrderItClick: function (e) {
      e.preventDefault();
      this.doOrder();
    },

    render: function (id) {
      this.foodId = id;

      $(this.el).html(FoodTemplate({
        food: {
          name: id,
          price: 30
        }
      }));
    }
  });
});
