import { combineReducers } from "redux";
import sideMenuReducer from "./sideMenuReducer";
import resultDataReducer from "./resultDataReducer";

export const rootReducer = combineReducers({
    sideMenu: sideMenuReducer,
    resultData: resultDataReducer
})