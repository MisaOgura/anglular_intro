toDoApp.controller('ToDoController', ['todoService', 'todoFactory', function(todoService, todoFactory){
  var toDo = this;
  toDo.todos = todoService.getall();
  console.log(toDo.todos);

  toDo.addToDo = function(todotext){
    toDo.todos.push(new ToDo(todotext));
  };

  toDo.removeToDo = function(){
    toDo.todos.pop();
  };
}]);
