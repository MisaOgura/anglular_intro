toDoApp.service('todoService',['$http', 'todoFactory', function($http, todoFactory){

this.getall = function(){
  var todos = [];
  _fetchTodosFromApi(todos);
  return todos;
  };

  function _fetchTodosFromApi(todos) {
    $http.get('http://quiet-beach-24792.herokuapp.com/todos.json')
      .then(function(resp) {
        _handleResponseFromApi(resp.data, todos);
      }, function(err) {});
  }

  function _handleResponseFromApi (data, todos) {
    data.forEach(function(toDoData){
      todos.push(new ToDo(toDoData.text));
    });
  }
}]);
