import Ember from 'ember';

export default Ember.Service.extend({
    status: 'idle', // Possible values: idle, deleting, success, error
    progress: 0, // Represents the progress percentage
    message: '', // A message related to the deletion process
  
});
