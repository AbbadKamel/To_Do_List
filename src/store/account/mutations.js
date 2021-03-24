export function setToken(state, data) {
  localStorage.setItem("token", data.token);
  state.token = data.token;
}

export function setAccountData(state, data) {
  state.accountData.name = data.name;
  state.accountData.email = data.email;
}

export function logout(state) {
  localStorage.removeItem("token");
  state.token = null;
  state.accountData.name = "";
  state.accountData.email = "";
}

export function errorModifyMessage(state, data) {
  state.errormessage = data;
}
