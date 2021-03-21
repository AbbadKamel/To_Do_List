export const getToken = (state) => state.token;

export const getUserData = (state) => state.accountData;

export const isLogIn = (state) => {
  if (state.token == null) {
    if (localStorage.getItem("token") == null) {
      return false;
    }
    state.token = localStorage.getItem("token");
  }
  return true;
};

export const getErrorMessage = (state) => state.errormessage;
