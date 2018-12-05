import React from 'react';

function clickHandler(props, todo) {
  return () => {
    event.preventDefault();
    if (event.target.value === "Delete") {
      props.removeTodo(todo);
    } else if (event.target.value === "Done") {
      todo.done = !todo.done;
      event.target.value = "Undo";
      props.receiveTodo(todo);
    } 
  };
}

export const TodoListItem = (props) => {
  let currentTodo = props.todo;
  return (
    <div>
      <li>{currentTodo.title}</li>
      <input type="submit" value="Delete" onClick={clickHandler(props, currentTodo)}/>
      <input type="submit" value="Done" onClick={clickHandler(props, currentTodo)}/>
    </div>
  );
};
