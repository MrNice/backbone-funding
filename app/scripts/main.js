/*global funding, $*/


window.funding = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    
    var users = new funding.Collections.UsersCollection();
    var app = new funding.Models.AppModel({collection: users});
    var appView = new funding.Views.AppView({model: app});

    console.log('Ohgod is this breaking?!');
  }
};

$(document).ready(function () {
  'use strict';
  funding.init();
});
