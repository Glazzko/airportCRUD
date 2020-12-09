import { combineReducers } from "redux";
import usersReducer from "./usersReducer";

const allReducers = combineReducers({
    usersR: usersReducer
});

export default allReducers;
