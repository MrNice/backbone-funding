/*global funding, Backbone, JST*/

funding.Views = funding.Views || {};

(function () {
  'use strict';

  funding.Views.NeedsView = Backbone.View.extend({
    tagName: 'div',

    className: 'needs col-xs-12',

    template: JST['app/scripts/templates/NeedsView.ejs'],

    initialize: function(){
      this.render();
    },

    render: function() {
      this.$el.html(this.template());
      console.log(this.$el);
      return this.$el.children(":first").append(
        // Shuffle the collection so that things look different every time
        this.collection.chain().shuffle().map(function(need){
          return new funding.Views.NeedEntryView({model: need}).render();
        }).value());
    },
  });

})();
