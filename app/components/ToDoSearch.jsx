var React = require('react');

var ToDoSearch = React.createClass({

  handleSearch : function(){
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;
    this.props.onSearch(showCompleted,searchText)
  },

  render : function(){
    return(
      <div>
        <div>
          <input type = "search" ref = "searchText" placeholder = "Search your Todos" onChange = {this.handleSearch}></input>
        </div>
        <div>
          <input type="checkbox" ref ="showCompleted" onChange={this.handleSearch}></input>
          Show Completed List
        </div>
      </div>
    );
  }
});

module.exports = ToDoSearch;
