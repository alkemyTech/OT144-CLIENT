import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { memberReducer } from "./memberReducer";
import newsReducer from "./newsReducer";
import categoriesReducer from "./categories";
import activitiesReducer from "./activitiesReducer";
import usersReducer from "./usersReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  news: newsReducer,
  activities: activitiesReducer,
  users: usersReducer,
  members: memberReducer,
});
