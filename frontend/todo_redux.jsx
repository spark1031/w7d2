import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { receiveTodo, receiveTodos, fetchTodos } from './actions/todo_actions';
import { allTodos } from './reducers/selectors';
import * as TodoAPIUtil from './util/todo_api_util';



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  // window.fetchTodos = TodoAPIUtil.fetchTodos;
  window.fetchTodos = fetchTodos;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});

