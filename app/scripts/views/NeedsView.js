/*global funding, Backbone, JST*/

funding.Views = funding.Views || {};

(function () {
    'use strict';

    funding.Views.NeedsviewView = Backbone.View.extend({

        template: JST['app/scripts/templates/NeedsView.ejs']

    });

})();
