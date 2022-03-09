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


export const getUsersAction = (users) => ({ type: types.USERS_GET, payload: users });

export const addUsersAction = (users) => ({ type: types.USERS_ADD, payload: users });

export const updateUsersAction = (users) => ({ type: types.USERS_UPDATE, payload: users });

export const deleteUsersAction = (id) => ({ type: types.USERS_DELETE, payload: id });