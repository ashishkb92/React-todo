var React = require('react');
var {connect} = require('react-redux');
import ToDo from 'ToDo';
var ToDoAPI = require('ToDoAPI');

export var ToDoList = React.createClass({

  render : function(){
    var {todos, showCompleted, searchText} = this.props;
    var renderList =() =>{
      if (todos.length === 0){
        return (
          <p className = "container__message">Nothing To Do</p>
        );
      }
      return ToDoAPI.filterTodos(todos, showCompleted, searchText).map((todos)=>{
      return(<ToDo key = {todos.id} {...todos} ></ToDo>);
    });
   };
    return(<div>
      {renderList()}
  </div>
         );
  }
});

export default connect(
  (state)=>{
    return state;
  }
)(ToDoList);
