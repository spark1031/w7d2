
export const allTodos = state => {
  let todoIdKeys = Object.keys(state.todos);
  return todoIdKeys.map( id => {
    return state.todos[id];
  });
};

