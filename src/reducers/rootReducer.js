import { combineReducers } from "redux";
import authReducer from "./authReducer";
import newsReducer from "./newsReducer";
import categoriesReducer from "./categories";
import activitiesReducer from "./activitiesReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  news: newsReducer,
  activities: activitiesReducer,
});
