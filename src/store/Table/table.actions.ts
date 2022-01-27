import {SAGA_SET_TABLE_DATA, SET_CURRENT_PAGE, SET_TABLE_DATA, SET_TOTAL_LENGTH} from "./table.constants";
import {Action, Book} from "../../types/global.types";
import {LibraryState} from "../Library/library.types";

export const setTableData = (rows: Book[]): Action<Book[]> => {
    return {
        type: SET_TABLE_DATA,
        payload: rows,
    };
};

export const setCurrentPage = (page: number): Action<number> => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page,
    };
};

export const setTotalLength = (length: number): Action<number> => {
    return {
        type: SET_TOTAL_LENGTH,
        payload: length
    }
}

export const handleTableRowsByPage = (pLoad: { books: Book[], page: number }): Action<{ books: Book[], page: number }> => {
    return {
        type: SAGA_SET_TABLE_DATA,
        payload: pLoad,
    };
};
