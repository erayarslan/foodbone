define(function (require, exports, module) {
  var UserCollection = require('../collections/user');
  var UserModel = require('../models/user');

  module.exports = {
    getAllUsers: function () {
      var userCollection = new UserCollection();
      userCollection.fetch({
        error: function () {
          //
        },
        success: function () {
          console.log(userCollection);
        }
      }).complete(function () {
        //
      });
    },
    getUserById: function (id) {
      var userModel = new UserModel({id: id});
      userModel.fetch({
        error: function () {
          //
        },
        success: function () {
          console.log(userModel);
        }
      }).complete(function () {
        //
      });
    }
  };
});
