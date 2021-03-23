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
      commit("deleteTodoList", id);
      commit("errorModifyMessagetodo", "");
      updatedata["status"] = response.status;
      return updatedata;
    })
    .catch((e) => {
      if (e.response.status === 500) {
        commit("errorModifyMessagetodo", "Server Error");
      }
    });
};
