var React = require('react');
var moment = require('moment');

var ToDo = React.createClass({

  render : function(){
    var {id, text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ?'todo todo-completed' :'todo';
    var renderDate = ()=>{
      var message = 'Created';
      var timestamp = createdAt;
      if(completed){
        message = 'Completed';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
    };
    return(
      <div className = {todoClassName} onClick = {()=>{
          this.props.onToggle(id);
        }   }>
        <input type = "checkbox" checked = {completed}></input>
        <div>
          <p>{text}</p>
          <p className = "todo_subtext">{renderDate()}</p>
        </div>
      </div>
         );
  }
});

module.exports = ToDo;
