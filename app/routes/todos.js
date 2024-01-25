import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        // return this.get('store');
        // return this.store.peekAll('todo');
        return this.store.findAll('todo');
           // return {};
      },
});
