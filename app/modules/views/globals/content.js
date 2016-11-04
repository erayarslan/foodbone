define(function (require, exports, module) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var NProgress = require('nprogress');
  var ContentTemplate = require('template!../../../templates/globals/content');

  var HeaderView = require('./header');
  var FooterView = require('./footer');

  module.exports = Backbone.View.extend({
    el: $('#content'),

    events: {},

    initialize: function () {
      this.headerView = new HeaderView();
      this.footerView = new FooterView();
    },

    render: function () {
      $(this.el).html(ContentTemplate({}));
      this.headerView.render();
      this.footerView.render();
      $('#head').html($(this.headerView.el));
      $('#foot').html($(this.footerView.el));
    },

    renderPage: function (activeView, args) {
      NProgress.start();
      this.activeView = activeView;
      this.activeView.render.apply(this.activeView, args);
      $('#app').html($(this.activeView.el)).promise().done(function () {
        NProgress.done();
      });
    }
  });
});
