/*global funding, Backbone*/

funding.Collections = funding.Collections || {};

(function () {
  'use strict';

  funding.Collections.UsersCollection = Backbone.Collection.extend({

    model: funding.Models.UserModel,

    initialize: function() {
    },

    events: {
    },
  });

})();