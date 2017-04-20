var React = require('react');

var ToDoList = require('ToDoList');

var ToDoApp = React.createClass({
  getInitialState : function(){
    return{
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
  render : function(){
    var {todos}= this.state;
    var List = this.state.todos.map((todos,i)=>{
    return (<ToDoList id = {todos.id} text = {todos.text}></ToDoList>);
    });
    return(<div>
      <ToDoList todos = {todos}></ToDoList>

      </div>
  );
  }
});

module.exports = ToDoApp;
