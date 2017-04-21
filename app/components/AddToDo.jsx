var React = require('react');

var AddToDo = React.createClass({
  handleOnSubmit : function(e){
    e.preventDefault();
    var todotext = this.refs.todotext.value;
    if (todotext.length > 0 ){
      this.refs.todotext.value='';
      this.props.onAddToDo(todotext);
    }else{
      this.refs.todotext.focus();
    }

  },

  render : function(){
    return(
      <div>
        <form onSubmit = {this.handleOnSubmit}>
          <input type = "text" ref = "todotext" placeholder ="What do you want to do" required>
          </input>
          <button className="button expannded">Add</button>
        </form>
      </div>
    );
  }
});

module.exports = AddToDo;
