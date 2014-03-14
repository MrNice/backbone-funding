/*global funding, Backbone, JST*/

funding.Views = funding.Views || {};

(function () {
    'use strict';

    funding.Views.NeedentryviewView = Backbone.View.extend({

        template: JST['app/scripts/templates/NeedEntryView.ejs']

    });

})();
