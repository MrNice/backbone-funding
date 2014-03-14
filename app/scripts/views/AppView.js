/*global funding, Backbone, JST*/

funding.Views = funding.Views || {};

(function () {
    'use strict';

    funding.Views.AppView = Backbone.View.extend({

        template: JST['app/scripts/templates/AppView.ejs']

    });

})();
