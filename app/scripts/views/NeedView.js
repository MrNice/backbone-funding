/*global funding, Backbone, JST*/

funding.Views = funding.Views || {};

(function () {
    'use strict';

    funding.Views.NeedView = Backbone.View.extend({

        template: JST['app/scripts/templates/NeedView.ejs']

    });

})();
