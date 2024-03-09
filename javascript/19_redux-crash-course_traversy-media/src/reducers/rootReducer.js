import { combineReducers } from "redux";
import postReducer from "./postReducer.js";

const rootReducer = combineReducers({ posts: postReducer });

export default rootReducer;
