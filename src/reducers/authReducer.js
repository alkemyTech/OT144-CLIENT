import types from "../types";

const initialState = {
  checking: true,
  isAuthenticated: false,
  user: {},
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        checking: false,
        isAuthenticated: true,
      };

    case types.authLogout:
      return {
        ...initialState,
        checking: false,
      };

    default:
      return state;
  }
};

export default authReducer;
