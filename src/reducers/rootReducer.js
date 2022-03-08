import { combineReducers } from "redux";
import authReducer from "./authReducer";
import newsReducer from "./newsReducer";
import categoriesReducer from "./categories";
import usuariosReducer from "./usuariosReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  news: newsReducer,
  usuarios: usuariosReducer,
});
