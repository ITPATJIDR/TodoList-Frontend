import { combineReducers } from "redux";
import authReducer from "./authReducer";
import notifyReducer from "./notifyReducers";
import tokenReducer from "./tokenReducer";
import userReducer from "./userReducer";
import todoListReducer from "./todoListReducers";

export default combineReducers({
    auth: authReducer,
    token: tokenReducer,
    noti: notifyReducer,
    user: userReducer,
    todo: todoListReducer,
});
