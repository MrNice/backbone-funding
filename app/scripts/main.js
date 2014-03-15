/*global funding, $*/


window.funding = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';

    var users = new UsersCollection(userData);
    var app = new AppModel({collection: users});
    var appView = new AppView({model: app});

    console.log('Ohgod is this breaking?!');
  }
};

$(document).ready(function () {
  'use strict';
  funding.init();
});
