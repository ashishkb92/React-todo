var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require ('react-redux');

var ToDoApp = require('ToDoApp');
var ToDoAPI = require('ToDoAPI');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=>{
  var state = store.getState();
  console.log ('New State',state);
  ToDoAPI.setTodos(state.todos);
});

var initialTodos = ToDoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store = {store}>
    <ToDoApp></ToDoApp>
  </Provider>,
  document.getElementById('app')
);
