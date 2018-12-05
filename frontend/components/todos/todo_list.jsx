import React from 'react';
import {TodoListItem} from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';
// module.exports = () => <h3>Todo List goes here!</h3>;

class TodoList extends React.Component {
  componentDidMount () {
    this.props.fetchTodos();
  }
  
  render () {
    let todoListItems = this.props.todos.map((todo) => ( 
      <TodoListItem 
        key={todo.id} 
        todo={todo} 
        removeTodo={this.props.removeTodo}
        receiveTodo={this.props.receiveTodo} 
        />
      )
    );

    return (
      <div className='todo-list'>
        <h3>Todo List goes here!</h3>
          <TodoForm receiveTodo={this.props.receiveTodo} 
            createTodo={this.props.createTodo}
            errors={this.props.errors}
            clearErrors={this.props.clearErrors}/>
        <ul>
          {todoListItems}
        </ul>
      </div>
    );
  }
}

export default TodoList;

