/*global funding, Backbone*/

funding.Collections = funding.Collections || {};

(function () {
    'use strict';

    funding.Collections.HelpedCollection = Backbone.Collection.extend({

        model: funding.Models.NeedModel

    });

})();
