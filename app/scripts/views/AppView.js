/*global funding, Backbone, JST*/

funding.Views = funding.Views || {};

(function () {
    'use strict';

    funding.Views.AppviewView = Backbone.View.extend({

        template: JST['app/scripts/templates/AppView.ejs']

    });

})();
