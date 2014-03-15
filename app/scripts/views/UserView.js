/*global funding, Backbone, JST*/

funding.Views = funding.Views || {};

(function () {
  'use strict';

  funding.Views.UserView = Backbone.View.extend({

    tagName: 'div',

    className: 'users col-sm-6 col-xs-12',

    template: JST['app/scripts/templates/UserView.ejs'],

    initialize: function(){
      this.render();
    },

    render: function(){
      this.$el.html(this.template());
      console.log(this.$el);
      this.$el.children(":first").append(
        this.collection.chain().shuffle().map(function(user){
          return new funding.Views.UserEntryView({model: user}).render();
        }).value()
      );
    },
  });

})();
