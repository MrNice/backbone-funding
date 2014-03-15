/*global funding, Backbone*/

funding.Models = funding.Models || {};

(function () {
  'use strict';

  funding.Models.AppModel = Backbone.Model.extend({

    url: '',

    initialize: function() {
      // Add all of the needs stored under users 
      _(this.get('users').models).each(function(user) {
        if(user.get('need') !== undefined) {
          user.spawnNeed();
        }
      });
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();