import Ember from 'ember';

export default Ember.Controller.extend({

  todoDeletion: Ember.inject.service(),

  actions: {
    // written for delete a todo in DB
    deleteTodo(todo) { 
      todo.destroyRecord();
    },
    // written for delete_all_todos in todos DB
    deleteAllTodos() {
      this.set('todoDeletion.status', 'deleting');
      this.set('todoDeletion.message', 'Deletion in progress...');

      this.store.adapterFor('todo').ajax('http://localhost:3000/delete_all_todos', 'DELETE').then(() => {
        this.set('todoDeletion.status', 'success');
        this.set('todoDeletion.message', 'Deletion completed successfully.');
        this.transitionToRoute('todos');
      }).catch((err) => {
        console.error('Error deleting all todos: ', err);
        this.set('todoDeletion.status', 'error');
        this.set('todoDeletion.message', 'Error occurred during deletion.');
      });
    
    }
    // // Written asynchronous call for deleting all records in DB using sidekiq
    // deleteAllTodos: async function() {
    //   this.set('todoDeletion.status', 'deleting');
    //   this.set('todoDeletion.message', 'Deletion in progress...');

    //   try {
    //     // Trigger the DELETE request to the Rails backend
    //     await this.store.adapterFor('todo').ajax('/delete_all_todos', 'DELETE');

    //     this.set('todoDeletion.status', 'success');
    //     this.set('todoDeletion.message', 'Deletion completed successfully.');
    //     this.transitionToRoute('todos');
    //   } catch (error) {
    //     console.error('Error deleting all todos:', error);
    //     this.set('todoDeletion.status', 'error');
    //     this.set('todoDeletion.message', 'Error occurred during deletion.');
    //   }
    // },
},
});