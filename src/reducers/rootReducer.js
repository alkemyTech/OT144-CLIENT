import { combineReducers } from "redux";
import authReducer from "./authReducer";
import newsReducer from "./newsReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer
});
