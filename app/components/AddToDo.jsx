var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

 export var AddToDo = React.createClass({
  handleOnSubmit : function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var todotext = this.refs.todotext.value;
    if (todotext.length > 0 ){
      this.refs.todotext.value='';
      //this.props.onAddToDo(todotext);
      dispatch(actions.addTodo(todotext));
    }else{
      this.refs.todotext.focus();
    }

  },

  render : function(){
    return(
      <div className = "container__footer">
        <form onSubmit = {this.handleOnSubmit}>
          <input type = "text" ref = "todotext" placeholder ="What do you want to do" required>
          </input>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddToDo);
