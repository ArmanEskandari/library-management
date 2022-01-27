import {Reducer} from "react";
import {SET_CURRENT_PAGE, SET_TABLE_DATA, SET_TOTAL_LENGTH} from "./table.constants";
import {TableState} from "./table.types";
import {Action, Book} from "../../types/global.types";
import {RootState} from "../store.types";

export const initialTableState = {
    rows: [] as Book[],
    currentPage: 1,
    totalLength: 0,
};

export const tableReducer: Reducer<TableState, Action> = (state = initialTableState, action) => {
    switch (action.type) {
        case SET_TABLE_DATA:
            return {
                ...state,
                rows: (action as Action<Book[]>).payload!,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload as number,
            };
        case SET_TOTAL_LENGTH:
            return {
                ...state,
                totalLength: action.payload as number
            }

        default:
            return state;
    }
};
