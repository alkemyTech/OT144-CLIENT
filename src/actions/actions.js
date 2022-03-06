import * as types from "../types";

export const login = (user) => {
  return {
    type: types.AUTH_LOGIN,
    payload: {
      token: user.token,
      user: user.user,
    },
  };
};

export const register = (user) => {
  return {
    type: types.AUTH_LOGIN,
    payload: {
      token: user.token,
      user: user.user,
    },
  };
};

export const logout = () => ({ type: types.AUTH_LOGOUT });
