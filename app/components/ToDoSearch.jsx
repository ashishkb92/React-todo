var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var ToDoSearch = React.createClass({



  render : function(){
    var {dispatch, showCompleted, searchText} = this.props;
    return(
      <div className = "container__header">
        <div>
          <input type = "search" ref = "searchText" value ={searchText}  placeholder = "Search your Todos" onChange = {()=>{
                var searchText = this.refs.searchText.value;
                dispatch(actions.setSearchText(searchText))
            }}></input>
        </div>
        <div>
          <input type="checkbox" ref ="showCompleted" checked = {showCompleted} onChange={()=>{
              dispatch (actions.toggleShowCompleted())
            }}></input>
          Show Completed List
        </div>
      </div>
    );
  }
});

export default connect(
  (state)=>{
    return {
      showCompleted : state.showCompleted,
      searchText : state.searchText
    }
  }
)(ToDoSearch);
