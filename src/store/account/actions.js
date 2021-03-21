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

export function register({ commit }, data) {
  const name = data.name;
  const email = data.email;
  const password = data.password;
  axios
    .post("register", { name, email, password })
    .then((response) => {
      if (response.status == 200) {
        commit("setToken", response.data);
        commit("setAccountData", { name, email });
        commit("errorModifyMessage", "");
        router.push("/");
      }
    })
    .catch((e) => {
      if (e.response.status === 409) {
        commit("errorModifyMessage", "EMAIL DEJA UTILISER");
      }
      if (e.response.status === 422) {
        commit(
          "errorModifyMessage",
          "The password must be at least 6 characters"
        );
      }
    });
}

export function logout({ commit }) {
  commit("logout");
  router.push("/");
}
