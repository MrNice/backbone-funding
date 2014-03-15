/*global funding, Backbone*/

funding.Collections = funding.Collections || {};

(function () {
    'use strict';

    funding.Collections.NeedsCollection = Backbone.Collection.extend({

        model: funding.Models.NeedModel

    });

})();
