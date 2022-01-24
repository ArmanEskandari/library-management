import {all, put, takeLatest} from "redux-saga/effects";
import type {Action, Book} from "../../types/global.types";
import {addBook} from "./library.actions";
import {SAGA_ADD_BOOK_DATA} from "./library.constants";


function* addBookToLibrary(action: Action<Book>) {
    console.log('payload:', action)
    yield put(addBook(action.payload!))
}

export function* rootLibrarySaga() {
    yield all([takeLatest(SAGA_ADD_BOOK_DATA, addBookToLibrary)])
}