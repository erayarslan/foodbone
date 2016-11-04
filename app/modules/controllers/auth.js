define(function (require, exports, module) {
  // (0)Guess (1)User (2)Restaurant (3)Admin
  module.exports = {
    isAdmin: function (route, args, next) {
      //
      next();
    },
    isRestaurant: function (route, args, next) {
      //
      next();
    },
    isUser: function (route, args, next) {
      //
      next();
    },
    isGuess: function (route, args, next) {
      //
      next();
    }
  };
});
