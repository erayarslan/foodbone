define(function (require, exports, module) {
  var $ = require('jquery');
  var Backbone = require('backbone');
  var FooterTemplate = require('template!../../../templates/globals/footer');

  module.exports = Backbone.View.extend({
    events: {},

    initialize: function () {
    },

    render: function () {
      $(this.el).html(FooterTemplate({}));
    }
  });
});
