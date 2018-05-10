var mongoose = require('mongoose');

var toDoSchema = new mongoose.Schema({
  name: {
    type: String,
      required: 'Name cannot be blank',
    },
    completed: {
      type: Boolean,
      default: false
    },
    created_date: {
      type: Date,
      default: Date.now
    }
});

var ToDo = mongoose.model('todo', toDoSchema);

module.exports = ToDo;