import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { memberReducer } from "./memberReducer";
import newsReducer from "./newsReducer";
import categoriesReducer from "./categories";
import usersReducer from "./usersReducer";
import sliderReducer from "./sliderReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  news: newsReducer,
  users: usersReducer,
  members: memberReducer,
  sliders: sliderReducer,
});
