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

//**************TODO ************************ */

export function addTodo(state, data) {
  const todoList = state.todoLists.find(
    (todoList) => todoList.id === data.todolist_id
  );
  todoList.todos.push(data);
}

export function modifyTodo(state, data) {
  const todoList = state.todoLists.find(
    (todoList) => todoList.id === data.todolist_id
  );
  const todo = todoList.todos.find((todo) => todo.id === data.id);
  todo.completed = data.completed;
  todo.name = data.name;
  todo.todolist_id = data.todolist_id;
}

export function deleteTodo(state, data) {
  const todoList = state.todoLists.find(
    (todoList) => todoList.id === data.todolist_id
  );
  todoList.todos = todoList.todos.filter((todo) => todo.id !== data.id);
}

export function errorModifyMessagetodo(state, data) {
  state.errormessage = data;
}
