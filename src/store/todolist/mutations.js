/**********LIST******************** */
export function addTodoList(state, data) {
  state.todoLists.push(data);
}

export function setTodoList(state, data) {
  state.todoLists = data;
}

export function deleteTodoList(state, id) {
  for (let i = 0; i < state.todoLists.length; i++) {
    if (state.todoLists[i].id === id) {
      state.todoLists.splice(i, 1);
    }
  }
}
