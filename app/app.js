define(function (require, exports, module) {
  var utils = require('utils');
  var cache = require('cache');
  var ContentView = require('modules/views/globals/content');
  var contentView = new ContentView();

  utils.historyTrick();
  utils.tokenSync();

  contentView.render();

  cache.appView = contentView;

  module.exports = {
    root: module.config().root
  };
});
