/*global funding, Backbone, JST*/

funding.Views = funding.Views || {};

(function () {
    'use strict';

    funding.Views.UserviewView = Backbone.View.extend({

        template: JST['app/scripts/templates/UserView.ejs']

    });

})();
