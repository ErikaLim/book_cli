import Ember from 'ember';

var BooksRoute = Ember.Route.extend({
  model:function() {
    return this.store.find("book");
  }
});


export default BooksRoute;
