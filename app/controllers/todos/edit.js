import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {

        saveTodo: function(){
        this.get('model').save()
        .then(() => {
            this.transitionToRoute('todos');
        })
        .catch(error =>{
            console.error('Error Saving todo', error)
        })
        }

    },
});