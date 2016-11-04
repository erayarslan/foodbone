define(function (require, exports, module) {
  var $ = require('jquery');
  var Backbone = require('backbone');
  var SummaryTemplate = require('template!../../templates/summary');
  var app = require('app');
  var utils = require('utils');

  module.exports = Backbone.View.extend({
    events: {
      'click #finish': 'handleFinishClick'
    },

    initialize: function () {
    },

    handleFinishClick: function (e) {
      e.preventDefault();
      app.router.navigate('/finish', true);
    },

    render: function () {
      $(this.el).html(SummaryTemplate({}));
    }
  });
});
