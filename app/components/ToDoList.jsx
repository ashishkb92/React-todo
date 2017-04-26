var React = require('react');

var ToDo = require('ToDo')

var ToDoList = React.createClass({

  render : function(){
    var {todos} = this.props;
    var renderList =() =>{
      if (todos.length === 0){
        return (
          <p className = "container__message">Nothing To Do</p>
        );
      }
      return(todos.map((todos)=>{
      return(<ToDo key = {todos.id} {...todos} onToggle = {this.props.onToggle}></ToDo>);
    })
  )};
    return(<div>
      {renderList()}
  </div>
         );
  }
});

module.exports = ToDoList;
