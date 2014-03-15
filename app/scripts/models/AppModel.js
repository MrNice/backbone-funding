/*global funding, Backbone*/

funding.Models = funding.Models || {};

(function () {
  'use strict';

  funding.Models.AppModel = Backbone.Model.extend({

    url: '',

    initialize: function() {
      // Add all of the needs stored under users 
      this.get('needs').listenTo(this.get('users'), 'newNeed', function(need) {
        this.add(need);
        console.log('Need added: ' + need.get('title') );
      });

      // this.get('needs').listenTo(this.get('users'), 'newNeed', function() {
      //   console.log('The queue heard the player end event');
      // });

      _(this.get('users').models).each(function(user) {
        if(user.get('need') !== undefined) {
          user.spawnNeed();
        }
      });
    },

    defaults: {
    },
  });

})();