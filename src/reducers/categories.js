import * as types from "../types";

const initialState = {
  categories: [],
  list: [],
};

const categoriesReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case types.CATEGORIES_SET:
      return {
        categories: action.payload,
        ...state,
      };
      case types.CATEGORIES_GET:
        return {
          list: [action.payload],
          ...state,
        };
    case types.CATEGORIES_ADD:
      return {
        categories: [...state.categories, action.payload],
        ...state,
      };
    case types.CATEGORIES_UPDATE:
      return {
        categories: state.categories.map((elem) =>
          elem.id === action.payload.id ? action.payload : elem
        ),
        ...state,
      };
    case types.CATEGORIES_DELETE:
      return {
        categories: state.categories.filter(
          (elem) => elem.id !== action.payload
        ),
        ...state,
      };
    default:
      console.log("default");
      return { ...state };
  }
};

export default categoriesReducer;
