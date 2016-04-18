toDoApp.controller('ToDoController', ['todoFactory', function(todoFactory){
  var toDo = this;
  toDo.todos = [];

  toDo.addToDo = function(todotext){
    toDo.todos.push(new ToDo(todotext));
  };

  toDo.removeToDo = function(){
    toDo.todos.pop();
  };
}]);
