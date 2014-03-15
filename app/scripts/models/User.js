/*global funding, Backbone*/

funding.Models = funding.Models || {};

(function () {
  'use strict';

  funding.Models.UserModel = Backbone.Model.extend({
    initialize: function() {
      this.set('helped', new funding.Collections.HelpedCollection());
      // Hacky way to get around the preloading
    },

    defaults: {
      img: "http://art-tech.arts.ufl.edu/gal/d/11226-1/head-silhouette.png",
    },

    spawnNeed: function(){
      if(this.get('need') !== undefined) {
        if(this.get('need')['added'] === false){
          console.log(this.get('need'));
          this.set('added', true);
          this.trigger('newNeed', new funding.Models.NeedModel(this.get('need')));
        }
      }
    },

  });
})();