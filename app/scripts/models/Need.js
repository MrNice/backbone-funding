/*global funding, Backbone*/

funding.Models = funding.Models || {};

(function () {
  'use strict';

  funding.Models.NeedModel = Backbone.Model.extend({
    initialize: function() {
    },

    defaults: {
      amountNeeded: 100,
      amountRecieved: 0,
    },
  });
})();
