import axios from "axios";
import { baseURL } from "../Services/Api";
import types from "../types";

export const login = (email, password) => async (dispatch) => {
  const response = await axios.post(`${baseURL}login`, { email, password });
  if (response.status === 200) {
    dispatch({
      type: types.authLogin,
      payload: {
        token: response.data.data.token,
        user: response.data.data.user,
      },
    });
    localStorage.setItem("token", response.data.data.token);
  } else {
    //TODO: Alert login failed
  }
};

export const register = (name, email, password) => async (dispatch) => {
  const response = await axios.post(`${baseURL}register`, {
    name,
    email,
    password,
  });
  if (response.status === 200) {
    dispatch({
      type: types.authLogin,
      payload: {
        token: response.data.data.token,
        user: response.data.data.user,
      },
    });
    localStorage.setItem("token", response.data.data.token);
  } else {
    //TODO: Alert register failed
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: types.authLogout,
  });
};
