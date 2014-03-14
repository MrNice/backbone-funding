/*global funding, Backbone*/

funding.Models = funding.Models || {};

(function () {
  'use strict';

  funding.Models.NeedModel = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
      amountNeeded: 100,
      amountRecieved: 0,
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
