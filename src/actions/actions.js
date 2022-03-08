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

export const setNewsAction = (news) => ({ type: types.NEWS_GET, payload: news });

export const addNewsAction = (news) => ({ type: types.NEWS_ADD, payload: news });

export const updateNewsAction = (news) => ({ type: types.NEWS_UPDATE, payload: news });

export const deleteNewsAction = (id) => ({ type: types.NEWS_DELETE, payload: id });
