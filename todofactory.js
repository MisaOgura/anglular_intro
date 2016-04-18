toDoApp.factory('todoFactory', function(){

  ToDo = function(todoText){
    this.text = todoText;
    this.completed = false;
  };

  ToDo.prototype.complete = function(){
    this.completed = true;
  };

  return ToDo;
});
