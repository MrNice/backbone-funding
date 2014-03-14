/*global funding, Backbone*/

funding.Collections = funding.Collections || {};

(function () {
    'use strict';

    funding.Collections.LoanersCollection = Backbone.Collection.extend({

        model: funding.Models.LoanersModel

    });

})();
