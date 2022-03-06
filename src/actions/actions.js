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

export const setCategoriesActions = (categories) => ({
  type: types.CATEGORIES_SET,
  payload: categories,
});

export const getCategoriesActions = (category) => ({
  type: types.CATEGORIES_GET,
  payload: category,
});

export const addCategoriesActions = (category) => ({
  type: types.CATEGORIES_ADD,
  payload: category,
});

export const updateCategoriessActions = (category) => ({
  type: types.CATEGORIES_UPDATE,
  payload: category ,
});

export const deleteCategoriesActions = (id) => ({
  type: types.CATEGORIES_DELETE,
  payload: id,
});
