import axios from "@/api";

export const createTodoList = ({ commit }, name) => {
  let updatedata = { status: 0 };
  axios
    .post("todolist", { name })
    .then((response) => {
      updatedata["status"] = response.status;
      commit("addTodoList", response.data);
      updatedata["data"] = response.data;
      commit("errorModifyMessagetodo", "");
      return updatedata;
    })
    .catch((e) => {
      if (e.response.status === 500) {
        commit("errorModifyMessagetodo", "Server Error");
      }
    });
};

export const getTodolists = ({ commit }) => {
  let updatedata = { status: 0 };
  axios
    .get("todolists")
    .then((response) => {
      updatedata["status"] = response.status;
      commit("setTodoList", response.data);
      commit("errorModifyMessagetodo", "");
      return updatedata;
    })
    .catch((e) => {
      if (e.response.status === 500) {
        commit("errorModifyMessagetodo", "Server Error");
      }
    });
};

export const deleteTodoList = ({ commit }, data) => {
  const id = data.id;
  let updatedata = { status: 0 };
  axios
    .delete("todolist/" + id)
    .then((response) => {
      updatedata["status"] = response.status;
      commit("deleteTodoList", id);
      commit("errorModifyMessagetodo", "");
      return updatedata;
    })
    .catch((e) => {
      if (e.response.status === 500) {
        commit("errorModifyMessagetodo", "Server Error");
      }
    });
};

export const createTodo = ({ commit }, data) => {
  const name = data.name;
  const completed = data.completed;
  const todolist_id = data.todolist_id;
  let updatedata = { status: 0 };
  axios
    .post("todo", { name, completed, todolist_id })
    .then((response) => {
      updatedata["status"] = response.status;
      commit("errorModifyMessagetodo", "");
      commit("addTodo", response.data);
      return updatedata;
    })
    .catch((e) => {
      if (e.response.status === 500) {
        commit("errorModifyMessagetodo", "Server Error");
      }
    });
};

export const getTodosFromTodoListId = ({ commit }, todolist_id) => {
  console.log(todolist_id);
  let updatedata = { status: 0 };
  axios
    .get("todos/", { todolist_id })
    .then((response) => {
      updatedata["status"] = response.status;
      console.log("response");
      commit("setTodo", todolist_id, response.data);
      console.log(response.data);
      commit("errorModifyMessagetodo", "");
      return updatedata;
    })
    .catch((e) => {
      if (e.response.status === 500) {
        commit("errorModifyMessagetodo", "Server Error");
      }
    });
};

export const modifyTodo = ({ commit }, data) => {
  const id = data.id;
  const completed = data.completed;
  const name = data.name;
  const todolist_id = data.todolist_id;
  let updatedata = { status: 0 };
  axios
    .patch("todo/" + id, { completed, name, todolist_id })
    .then((response) => {
      updatedata["status"] = response.status;
      commit("modifyTodo", response.data);
      commit("errorModifyMessagetodo", "");
      return updatedata;
    })
    .catch((e) => {
      if (e.response.status === 500) {
        commit("errorModifyMessagetodo", "Server Error");
      }
    });
};

export const deleteTodo = ({ commit }, data) => {
  const id = data.id;
  const todolist_id = data.todolist_id;
  let updatedata = { status: 0 };
  axios
    .delete("todo/" + id)
    .then((response) => {
      updatedata["status"] = response.status;
      commit("deleteTodo", { id, todolist_id });
      commit("errorModifyMessagetodo", "");
      return updatedata;
    })
    .catch((e) => {
      if (e.response.status === 500) {
        commit("errorModifyMessagetodo", "Server Error");
      }
    });
};
