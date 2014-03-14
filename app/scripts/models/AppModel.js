/*global funding, Backbone*/

funding.Models = funding.Models || {};

(function () {
    'use strict';

    funding.Models.AppmodelModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
