import axios from "@/api";
import router from "@/router";

export function login({ commit }, data) {
  const email = data.email;
  const password = data.password;
  axios
    .post("login", { email, password })
    .then((response) => {
      if (response.status == 200) {
        commit("setToken", response.data);
        commit("setAccountData", { email, password });
        commit("errorModifyMessage", "");
        router.push("/");
      } else {
        commit("errorModifyMessage", "PROBLEM");
      }
    })
    .catch((e) => {
      if (e.response.status === 401) {
        commit("errorModifyMessage", "MAIL OR PASSWORD INCORRECT");
      }
    });
}

export function getAccount({ commit }) {
  axios
    .get("user")
    .then((response) => {
      if (response.status == 200) {
        const name = response.data.name;
        const email = response.data.email;
        commit("setAccountData", { name, email });
      }
    })
    .catch(console.error);
}
