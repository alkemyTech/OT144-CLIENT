import { combineReducers } from "redux";
import authReducer from "./authReducer";
import categoriesReducer from "./categories";
export const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
});
