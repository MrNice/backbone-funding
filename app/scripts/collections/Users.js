/*global funding, Backbone*/

funding.Collections = funding.Collections || {};

(function () {
  'use strict';

  funding.Collections.UsersCollection = Backbone.Collection.extend({

    model: funding.Models.UserModel,

    initialize: function() {
      // this.on('newNeed', function(need) { 
      //   this.trigger('newNeed', need); 
      // }, this);
    },

    events: {
      // 'newNeed': function(need) {
      //   console.log(need);
      // },
    },
  });

})();