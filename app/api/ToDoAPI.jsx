var $ = require('jquery');

module.exports ={
  setTodos : function(todos){
    if ($.isArray(todos)){
      localStorage.setItem('todos',JSON.stringify(todos));
      return todos;
    }
  },

  getTodos : function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try{
      todos = JSON.parse(stringTodos)
    }catch(e){

    }
    return $.isArray(todos) ? todos : [];
  },
  filterTodos : function(todos,showCompleted,searchText){
    var filteredTodos = todos ;
    //filter by show completed
    filteredTodos = filteredTodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });
    //filter by search text
    filteredTodos = filteredTodos.filter((todo)=>{
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText)>-1;

    });
    //sort todos by non completed first
    filteredTodos = filteredTodos.sort((a,b)=>{
      if (!a.completed && b.completed){
        return -1;
      }else if (a.completed && !b.completed){
        return 1;
      }else {
        return 0 ;
      }
    });
    return filteredTodos;
  }
};
