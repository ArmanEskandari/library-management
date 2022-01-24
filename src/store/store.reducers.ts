import {combineReducers} from "redux";

// Reducers
import {tableReducer} from "./Table/table.reducer";
import {libraryReducer} from "./Library/library.reducer";


export const reducers = combineReducers({
    table: tableReducer,
    library: libraryReducer
})