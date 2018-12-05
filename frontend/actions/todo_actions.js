//house action creators and action type constants
import * as TodoAPIUtil from '../util/todo_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

//lets reducer know to reset list of todos
//todos argument is an Array
export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos: todos
});

//argument: single todo
export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo: todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo: todo
});

export const fetchTodos = () => (dispatch, getState) => (
  TodoAPIUtil.fetchTodos()
    .then(res => dispatch(receiveTodos(res)))
);

export const createTodo = (todo) => (dispatch, getState) => (
  TodoAPIUtil.createTodo(todo)
    .then(
      todo => dispatch(receiveTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const updateTodo = (todo) => (dispatch, getState) => (
  TodoAPIUtil.updateTodo(todo)
    .then(
      todo => dispatch(receiveTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const deleteTodo = (todo) => (dispatch, getState) => (
  TodoAPIUtil.deleteTodo(todo)
    .then(
      todo => dispatch(removeTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);
