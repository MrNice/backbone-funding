/*global funding, Backbone, JST*/

funding.Views = funding.Views || {};

(function () {
  'use strict';

  funding.Views.UserView = Backbone.View.extend({

    template: JST['app/scripts/templates/UserView.ejs'],

    initialize: function(){
      this.render();
    },

    render: function(){
      console.log(this.collection);
      var children = this.collection.map(function(user) {
        return new funding.Views.UserEntryView({model: user});
      });
      return this.$el.html(this.template().concat(children));
    },
  });

})();
