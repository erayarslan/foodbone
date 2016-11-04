define(function (require, exports, module) {
  var BaseCollection = require('./base');
  var UserModel = require('../models/user');

  module.exports = BaseCollection.extend({
    url: function () {
      return this.getApiUrl() + '/users';
    },
    model: UserModel
  });
});
