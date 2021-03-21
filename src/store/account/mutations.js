export function setToken(state, data) {
  localStorage.setItem("token", data.token);
  state.token = data.token;
}

export function setAccountData(state, data) {
  state.accountData.name = data.name;
  state.accountData.email = data.email;
}
