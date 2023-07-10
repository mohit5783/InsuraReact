import { combineReducers } from "redux";
import userReducer from "./actions/userReducer";
import authReducer from "./actions/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
});

export default rootReducer;
