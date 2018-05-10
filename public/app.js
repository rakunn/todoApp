/* global $ */

$(document).ready(function(){
  $.getJSON('api/todos')
   .then(addTodos);
   
  $('#todoInput').on('keypress', function(event){
    if(event.which === 13) {
      createTodo();
    }
  });
  
  $('.list').on('click', 'li', function(){
    updateTodo($(this));
  });
  
  $('.list').on('click', 'span', function(event){
    event.stopPropagation();
    removeTodo($(this).parent());
  });
});

function addTodos(todos) {
  todos.forEach(function(todo){
    addTodo(todo);
  });
}

function createTodo() {
  const userInput = $('#todoInput').val();
  
  $.post('/api/todos', {name: userInput})
   .then(function(nwTodo){
     $('#todoInput').val('');
     addTodo(nwTodo);
   })
   .catch(function(err){
     console.log(err);
   });
}

function addTodo(todo) {
  let newTodo = $('<li class="task">'+todo.name+'<span>X</span></li>');
  
  newTodo.data('id', todo._id);
  newTodo.data('completed', todo.completed);
  
  if (todo.completed) {
    newTodo.addClass("done");
  }
  
  $('.list').append(newTodo);
}

function updateTodo(todo) {
  const taskId = todo.data('id');
  let isDone = !todo.data('completed');
  let updateData = {completed: isDone};
  
  $.ajax({
    method: 'PUT',
    url: 'api/todos/' + taskId,
    data: updateData
  })
  .then(function(updatedData){
    todo.toggleClass('done');
    todo.data(isDone);
  })
  .catch(function(err){
    console.log(err);
  });
}

function removeTodo(todo) {
  const taskId = todo.data('id');
  
  $.ajax({
    method: 'DELETE',
    url: 'api/todos/' + taskId
  })
  .then(function(deleted){
    todo.remove();
  });
}