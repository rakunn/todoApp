var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise;

module.exports.ToDo = require('./todo.js');