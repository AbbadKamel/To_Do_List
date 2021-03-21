import { createStore } from "vuex";

import account from "./account";
import todolist from "./todolist";
export default createStore({
  modules: {
    account,
    todolist,
  },
});
