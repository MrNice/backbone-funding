/*global funding, Backbone, JST*/

funding.Views = funding.Views || {};

(function () {
  'use strict';

  funding.Views.NeedEntryView = Backbone.View.extend({

    className: "item need col-sm-4 col-xs-6",

    template: JST['app/scripts/templates/NeedEntryView.ejs'],

    initialize: function(){
      this.render();
    },
    
    render: function() {
      return this.$el.html(this.template(this.model.attributes));
    },

  });

})();
