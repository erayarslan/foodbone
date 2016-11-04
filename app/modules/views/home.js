define(function (require, exports, module) {
  var $ = require('jquery');
  var Backbone = require('backbone');
  var HomeTemplate = require('template!../../templates/home');
  var app = require('app');
  var utils = require('utils');
  var lodash = require('lodash');

  module.exports = Backbone.View.extend({
    events: {
      'click #search': 'handleSearchClick',
      'click #lucky': 'handleLuckyClick',
      'keyup #food': 'handleFoodEnter'
    },

    searchValidate: function (text) {
      return utils.searchRegExp.test(text);
    },

    doSearch: function () {
      var text = utils.spaceToPlus($('#food').val());
      if (this.searchValidate(text)) {
        app.router.navigate('/search/' + utils.spaceToPlus(text.trim()), true);
      } else {
        utils.doNoty('error', 'use only characters, numbers and spaces!');
      }
    },

    doLucky: function () {
      app.router.navigate('/foods/' + lodash.random(0, 10), true);
    },

    handleLuckyClick: function (e) {
      e.preventDefault();
      this.doLucky();
    },

    handleSearchClick: function (e) {
      e.preventDefault();
      this.doSearch();
    },

    handleFoodEnter: function (e) {
      e.preventDefault();
      if (e.keyCode === 13) {
        this.doSearch();
      }
    },

    render: function () {
      $(this.el).html(HomeTemplate({}));
    }
  });
});
