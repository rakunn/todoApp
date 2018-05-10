var db = require('../models');


//get todos
exports.getTodos = function(req, res){
  db.ToDo.find()
   .then(function(todos){
     res.json(todos);
   })
   .catch(function(req, res){
     res.send('error');
   });
};

//create todos
exports.createTodo = function(req, res){
  db.ToDo.create(req.body)
   .then(function(newTodo){
     res.json(newTodo);
   })
   .catch(function(err){
     res.send(err);
   });
};

//get todo
exports.getTodo = function(req, res){
  db.ToDo.findById(req.params.todoId)
   .then(function(foundTodo){
     res.json(foundTodo);
   })
   .catch(function(err){
     res.send(err);
   });
};

//update todo
exports.updateToto = function(req, res){
  db.ToDo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}) //new true return updated version
    .then(function(updatedToto){
    res.json(updatedToto);
  })
    .catch(function(err){
    res.send(err);
  });
};

//delete todo
exports.deleteTodo = function(req, res){
 db.ToDo.remove({_id: req.params.todoId})
  .then(function(){
   res.json({message: 'We deleted it!'});
  })
  .catch(function(err){
   res.send(err);
  });
};

module.exports = exports;