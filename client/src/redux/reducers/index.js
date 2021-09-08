import { combineReducers } from "redux";
import { itemReducer } from "./items/itemReducer";

export const rootReducer = combineReducers({
    itemReducer : itemReducer
});



