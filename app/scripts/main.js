/*global funding, $*/


window.funding = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';

    var needs = new funding.Collections.NeedsCollection();
    var users = new funding.Collections.UsersCollection(userData);
    window.app = new funding.Models.AppModel({users: users, needs: needs});
    var appView = new funding.Views.AppView({model: app});

    console.log('Ohgod is this breaking?!');
  }
};

$(document).ready(function () {
  'use strict';
  funding.init();
});
