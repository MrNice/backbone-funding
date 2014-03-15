/*global funding, Backbone, JST*/

funding.Views = funding.Views || {};

(function () {
    'use strict';

    funding.Views.UserView = Backbone.View.extend({

        template: JST['app/scripts/templates/UserView.ejs']

    });

})();
