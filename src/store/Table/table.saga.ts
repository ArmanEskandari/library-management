import {all, put, takeEvery} from "redux-saga/effects";
import {setCurrentPage, setTableData, setTotalLength} from "./table.actions";
import {ITEM_PER_PAGE, SAGA_SET_TABLE_DATA} from "./table.constants";
import {Action, Book} from "../../types/global.types";
import {LibraryState} from "../Library/library.types";
import Books from "../../pages/Books";

function* handleTableRowsByPage(action: Action<{ books: Book[], page: number }>) {
    const tableRows = action.payload?.books;

    // set total Length
    yield put(setTotalLength(tableRows?.length ?? 0))

    // set current Page
    const page = action.payload!.page;
    yield put(setCurrentPage(page));

    yield put(setTableData(tableRows?.slice((page - 1) * ITEM_PER_PAGE, page * ITEM_PER_PAGE)!));
}

export function* rootTableSaga() {
    yield all([takeEvery(SAGA_SET_TABLE_DATA, handleTableRowsByPage)]);
}
