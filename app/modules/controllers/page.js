define(function (require, exports, module) {
  var RegisterView = require('../views/register');
  var ErrorView = require('../views/error');
  var HomeView = require('../views/home');
  var SearchView = require('../views/search');
  var FoodView = require('../views/food');
  var VerifyView = require('../views/verify');
  var SmsView = require('../views/sms');
  var AddressView = require('../views/address');
  var SummaryView = require('../views/summary');
  var FinishView = require('../views/finish');
  var OrdersView = require('../views/orders');
  var LoginView = require('../views/login');

  module.exports = {
    'register': function () {
      return new RegisterView();
    },
    'error': function () {
      return new ErrorView();
    },
    'home': function () {
      return new HomeView();
    },
    'search': function () {
      return new SearchView();
    },
    'food': function () {
      return new FoodView();
    },
    'verify': function () {
      return new VerifyView();
    },
    'sms': function () {
      return new SmsView();
    },
    'address': function () {
      return new AddressView();
    },
    'summary': function () {
      return new SummaryView();
    },
    'finish': function () {
      return new FinishView();
    },
    'orders': function () {
      return new OrdersView();
    },
    'login': function () {
      return new LoginView();
    }
  };
});
