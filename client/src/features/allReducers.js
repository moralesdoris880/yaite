import userAuth from "./reducers/authReducer.js";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  userAuth,
});
export default allReducers;