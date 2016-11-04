define(function (require, exports, module) {
  var $ = require('jquery');
  var Backbone = require('backbone');
  var AddressTemplate = require('template!../../templates/address');
  var app = require('app');
  var utils = require('utils');

  module.exports = Backbone.View.extend({
    events: {
      'click #next': 'handleNextClick',
      'keyup #address': 'handleAddressEnter'
    },

    initialize: function () {
    },

    doNext: function () {
      var obj = utils.tost.get('food');
      obj.address = $('#address-input').val();
      utils.tost.set('food', obj);

      app.router.navigate('/summary', true);
    },

    handleNextClick: function (e) {
      e.preventDefault();
      this.doNext();
    },

    handleAddressEnter: function (e) {
      // TextArea Enter Problem
      /*
       e.preventDefault();
       if (e.keyCode === 13) {
       this.doNext();
       }
       */
    },

    render: function () {
      $(this.el).html(AddressTemplate({}));
    }
  });
});
