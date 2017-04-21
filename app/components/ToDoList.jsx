var React = require('react');

var ToDo = require('ToDo')

var ToDoList = React.createClass({

  render : function(){
    var {todos} = this.props;
    var renderList =() =>{
      return(todos.map((todos)=>{
      return(<ToDo key = {todos.id} {...todos}></ToDo>);
    })
  )};
    return(<div>
      {renderList()}
  </div>
         );
  }
});

module.exports = ToDoList;
