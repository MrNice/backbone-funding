/*global funding, Backbone, JST*/

funding.Views = funding.Views || {};

(function () {
    'use strict';

    funding.Views.NeedsView = Backbone.View.extend({

        template: JST['app/scripts/templates/NeedsView.ejs']

    });

})();
