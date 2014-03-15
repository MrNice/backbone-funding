/*global funding, Backbone*/

funding.Models = funding.Models || {};

(function () {
  'use strict';

  funding.Models.UserModel = Backbone.Model.extend({
    initialize: function() {
      this.set('helped', new funding.Collections.HelpedCollection());
    },

    defaults: {
      img: "http://art-tech.arts.ufl.edu/gal/d/11226-1/head-silhouette.png",
    },
  });
})();