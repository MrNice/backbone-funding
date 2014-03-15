/*global funding, Backbone*/

funding.Models = funding.Models || {};

(function () {
  'use strict';

  funding.Models.UserModel = Backbone.Model.extend({
    initialize: function() {
      this.set('helped', new funding.Collections.HelpedCollection());
    },

    defaults: {
      "image": "http://art-tech.arts.ufl.edu/gal/d/11226-1/head-silhouette.png",
    },

    spawnNeed: function(){
      if(this.get('need')['added'] === false){
        this.get('need')['added'] = true;
        // console.log(this.get('need'));
        var newNeed = new funding.Models.NeedModel(this.get('need'));
        newNeed.set('image', this.get('image'));
        newNeed.set('owner', this);
        this.trigger('newNeed', newNeed);
      }
    },

  });
})();