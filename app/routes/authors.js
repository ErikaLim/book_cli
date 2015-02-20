import Ember from 'ember';

var AuthorsRoute = Ember.Route.extend({
  model:function () {
    return this.store.find("author");
  }
});


export default AuthorsRoute;
