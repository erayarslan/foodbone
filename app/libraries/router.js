define(function (require, exports, module) {
  var Backbone = require('backbone');
  var _ = require('underscore');

  require('backbone.middleware');

  var utils = require('utils');
  var cache = require('cache');

  var PageController = require('../modules/controllers/page');
  var auth = require('../modules/controllers/auth');

  // example for (router use)
  var test = function () {
    console.log('routing...');
  };

  /*
   m: middleware
   f: function
   */
  module.exports = Backbone.Router.extend({
    routes: {
      '(/)': {
        m: auth.isGuess,
        f: 'home'
      },
      'register(/)': {
        m: auth.isGuess,
        f: 'register'
      },
      'verify(/)': {
        m: auth.isGuess,
        f: 'verify'
      },
      'sms(/)': {
        m: auth.isGuess,
        f: 'sms'
      },
      'address(/)': {
        m: auth.isUser,
        f: 'address'
      },
      'summary(/)': {
        m: auth.isUser,
        f: 'summary'
      },
      'finish(/)': {
        m: auth.isUser,
        f: 'finish'
      },
      'orders(/)': {
        m: auth.isUser,
        f: 'orders'
      },
      'login(/)': {
        m: auth.isGuess,
        f: 'login'
      },
      'foods/:id(/)': {
        m: auth.isGuess,
        f: 'food'
      },
      'search/:text(/)': {
        m: auth.isGuess,
        f: 'search'
      },
      '*path': {
        m: auth.isGuess,
        f: 'default'
      }
    },

    use: [test, utils.pageEventCleaner(cache.appView)],

    home: function () {
      cache.appView.renderPage(PageController.home());
    },

    search: function (text) {
      var inputText = utils.plusToSpace(text);
      if (utils.searchRegExp.test(inputText)) {
        cache.appView.renderPage(PageController.search(), [inputText]);
      } else {
        cache.appView.renderPage(PageController.error(), ['WOW', 'INVALID INPUT']);
      }
    },

    register: function () {
      cache.appView.renderPage(PageController.register());
    },

    food: function (id) {
      cache.appView.renderPage(PageController.food(), [id]);
    },

    verify: function () {
      cache.appView.renderPage(PageController.verify());
    },

    sms: function () {
      cache.appView.renderPage(PageController.sms());
    },

    address: function () {
      cache.appView.renderPage(PageController.address());
    },

    summary: function () {
      cache.appView.renderPage(PageController.summary());
    },

    finish: function () {
      cache.appView.renderPage(PageController.finish());
    },

    orders: function () {
      cache.appView.renderPage(PageController.orders());
    },

    login: function () {
      cache.appView.renderPage(PageController.login());
    },

    default: function () {
      cache.appView.renderPage(PageController.error(), ['404', 'NOT FOUND']);
    }
  });
});
