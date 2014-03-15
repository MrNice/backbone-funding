/*global funding, Backbone, JST*/

funding.Views = funding.Views || {};

(function () {
  'use strict';

  funding.Views.UserEntryView = Backbone.View.extend({

    className: "item user col-sm-10 col-sm-offset-1",

    template: JST['app/scripts/templates/UserEntry.ejs'],

    initialize: function(){
      this.render();
    },

    render: function() {
      return this.$el.html(this.template(this.model.attributes));
    },

  });

})();
