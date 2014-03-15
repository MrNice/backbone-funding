/*global funding, $*/


window.funding = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log(funding.Collections.UsersCollection);
    var users = new funding.Collections.UsersCollection(userData);
    var app = new AppModel({collection: users});
    var appView = new AppView({model: app});

    console.log('Ohgod is this breaking?!');
  }
};

$(document).ready(function () {
  'use strict';
  funding.init();
});
