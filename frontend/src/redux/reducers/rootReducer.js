import { combineReducers } from "redux";

import todoReducer from "./todoReducer";

//rootReducer is a root reducer function for TODO app
const rootReducer = combineReducers({ todoReducer });

export default rootReducer;
