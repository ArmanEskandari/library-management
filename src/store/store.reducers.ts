import {combineReducers} from "redux";

// Reducers
import {tableReducer} from "./Table/table.reducer";


export const reducers = combineReducers({
    table: tableReducer
})