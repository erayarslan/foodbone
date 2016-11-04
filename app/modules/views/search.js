define(function (require, exports, module) {
  var $ = require('jquery');
  var Backbone = require('backbone');
  var SearchTemplate = require('template!../../templates/search');
  var FoodsTemplate = require(
    'template!../../templates/components/search_food_list'
  );
  var app = require('app');
  var utils = require('utils');

  module.exports = Backbone.View.extend({
    events: {
      'keyup #food': 'handleFoodChange'
    },

    initialize: function () {
    },

    doFoodSearch: function (text) {
      this.renderFoods(text);
    },

    handleFoodChange: function (e) {
      e.preventDefault();

      var self = this;

      clearTimeout(this.timer);

      var str = $('#food').val().trim();

      if (!utils.searchRegExp.test(str)) {
        $('#food').val(function (index, value) {
          return value.substr(0, value.length - 1);
        });
      } else {
        this.timer = setTimeout(function () {
          var text = utils.plusToSpace(str);

          self.doFoodSearch(text);
          app.router.navigate(
            '/search/' + utils.spaceToPlus(text),
            {trigger: false, replace: true}
          );
        }, 1000);
      }

    },

    render: function (text) {
      $(this.el).html(SearchTemplate({text: text}));
      this.doFoodSearch(text);
    },

    renderFoods: function (text) {
      $(this.el).find('#food-list').html(FoodsTemplate({text: text}));
    }
  });
});
