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

export const setNewsAction = (news) => ({ type: types.NEWS_GET, payload: news });

export const addNewsAction = (news) => ({ type: types.NEWS_ADD, payload: news });

export const updateNewsAction = (news) => ({ type: types.NEWS_UPDATE, payload: news });

export const deleteNewsAction = (id) => ({ type: types.NEWS_DELETE, payload: id });


export const getUsuariosAction = (usuarios) => ({ type: types.USUARIOS_GET, payload: usuarios });

export const addUsuariosAction = (usuarios) => ({ type: types.USUARIOS_ADD, payload: usuarios });

export const updateUsuariosAction = (usuarios) => ({ type: types.USUARIOS_UPDATE, payload: usuarios });

export const deleteUsuariosAction = (id) => ({ type: types.USUARIOS_DELETE, payload: id });