import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { memberReducer } from "./memberReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  members: memberReducer,
});
