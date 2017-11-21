import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './reducers';
import TodoApp from './components/TodoApp';

ReactDOM.render(
  <Provider store={createStore(todoReducer)}>
    <TodoApp />
  </Provider>,
  document.getElementById('app'),
);
