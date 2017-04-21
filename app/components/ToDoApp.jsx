var React = require('react');

var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require ('ToDoSearch');

var ToDoApp = React.createClass({
  getInitialState : function(){
    return{
      showCompleted : false ,
      searchText : '',
      todos:[
        {
          id : 1,
          text: 'walk the dog'
        },
        {
          id : 2,
          text: 'clean the yard'
        }
      ]
    };
  },

  handleAddToDo : function(todotext){
    alert('Function added'+todotext )
  },

  handleSearch : function(showCompleted,searchText){
    this.setState({
      showCompleted : showCompleted,
      searchText : searchText.toLowerCase()
    });
  },

  render : function(){
    var {todos}= this.state;

    return(<div>
      <ToDoSearch onSearch = {this.handleSearch}></ToDoSearch>
      <ToDoList todos = {todos}></ToDoList>
      <AddToDo onAddToDo={this.handleAddToDo}></AddToDo>
      </div>
  );
  }
});

module.exports = ToDoApp;
