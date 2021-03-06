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
        // console.log('Need added: ' + need.get('title') );
      });

      _(this.get('users').models).each(function(user) {
        if(user.get('need') !== undefined) {
          user.spawnNeed();
        }
      });

      // Get donation list from users and set need.amountReceived
      var funds = this.get('users').pluck('funded');
      _(funds).each(function(fund) {
        _(fund).each(function(donation) {

        });
      });
    },

    defaults: {
    },
  });

})();