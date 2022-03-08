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

export const setActivityAction = (activity) => ({ type: types.ACTIVITY_GET, payload: activity });

export const addActivityAction = (activity) => ({ type: types.ACTIVITY_ADD, payload: activity });

export const updateActivityAction = (activity) => ({ type: types.ACTIVITY_UPDATE, payload: activity });

export const deleteActivityAction = (id) => ({ type: types.ACTIVITY_DELETE, payload: id });