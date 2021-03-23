export const getTodolistData = (state) => state.todoLists;

export const getTodolistById = (state) => (id) =>
  state.todoLists.find((list) => list.id === id);

export const getErrorMessageTodo = (state) => state.errormessage;
