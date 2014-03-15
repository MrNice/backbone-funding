/*global funding, Backbone, JST*/

funding.Views = funding.Views || {};

(function () {
  'use strict';

  funding.Views.AppView = Backbone.View.extend({

    className: 'row',
    
    template: JST['app/scripts/templates/AppView.ejs'],

    initialize: function(){
      this.userView = new funding.Views.UserView({
        collection: this.model.get('users'),
      });
      
      this.needsView = new funding.Views.NeedsView({
        collection: this.model.get('needs'),
      });
      this.render();

    },

    render: function(){
      console.log('rendering');

      var rendered = this.template();

      return this.$el.html([
        rendered,
        this.needsView.$el,
      ]);
    },
  });
})();
