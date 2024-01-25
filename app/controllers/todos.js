import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteTodo: function(todo){
        todo.destroyRecord();
    }
},
});