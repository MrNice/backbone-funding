/*global funding, Backbone, JST*/

funding.Views = funding.Views || {};

(function () {
  'use strict';

  funding.Views.NeedsView = Backbone.View.extend({
    tagName: 'div',

    className: 'needs col-sm-6 col-xs-12',

    template: JST['app/scripts/templates/NeedsView.ejs'],

    initialize: function(){
      this.render();
    },

    render: function() {
      this.$el.html(this.template());
      console.log(this.$el);
      return this.$el.children(":first").append(
        this.collection.map(function(need){
          return new funding.Views.NeedEntryView({model: need}).render();
        }));
    },
  });

})();
