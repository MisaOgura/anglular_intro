toDoApp.controller('ToDoController', function(){
  var toDo = this;
  toDo.todos = [{text: 'Todo 1', completed: true},
                {text: 'Todo 2', completed: false}];
  toDo.addToDo = function(todotext){
    toDo.todos.push({text: todotext, completed: false});
  };

  toDo.removeToDo = function(){
    toDo.todos.pop();
  };
});
