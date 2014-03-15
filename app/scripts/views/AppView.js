/*global funding, Backbone, JST*/

funding.Views = funding.Views || {};

(function () {
  'use strict';

  funding.Views.AppView = Backbone.View.extend({

    template: JST['app/scripts/templates/AppView.ejs'],

    initialize: function(){
      this.usersView = new funding.Views.UserView({
        collection: this.model.get('users'),
      });
      
      this.needsView = new funding.Views.NeedsView({
        collection: this.model.get('needs'),
      });

      this.render();
    },

    render: function(){
      console.log('rendering');
      return this.$el.html(this.template());
      // return this.$el.html([
      //   this.usersView.$el,
      //   this.needsView.$el,
      //   ]);
    },
  });
})();
