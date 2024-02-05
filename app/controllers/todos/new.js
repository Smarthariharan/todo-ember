import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        saveTodo : function() {
       const title = this.get('title');

       let newTask = this.store.createRecord('todo',{
         title: title,
       });
       
        newTask.save();
       console.log(title+ " ");
  
        
       this.setProperties({
        title: '',
       });
        }
      }
});