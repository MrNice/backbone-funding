/*global funding, Backbone*/

funding.Models = funding.Models || {};

(function () {
  'use strict';

  funding.Models.NeedModel = Backbone.Model.extend({
    initialize: function() {
      this.set('loaners', new funding.Collections.LoanersCollection());
    },

    defaults: {
      amountNeeded: 100,
      amountReceived: 0,
    },

    receiveDonation: function(amount, donor) {
      this.get('loaners').add(donor); 
      this.set('amountReceived', this.get('amountReceived') + amount);
    },
  });
})();
