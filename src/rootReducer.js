import { combineReducers } from "redux";
import userReducer from "./actions/userReducer";

const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
