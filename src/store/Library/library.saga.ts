import {all, put, takeLatest} from "redux-saga/effects";
import type {Action, Book} from "../../types/global.types";
import {addBook, deleteBook} from "./library.actions";
import {SAGA_ADD_BOOK_DATA, SAGA_REMOVE_BOOK_DATA} from "./library.constants";


function* addBookToLibrary(action: Action<Book>) {
    yield put(addBook(action.payload!))
}

function* removeBook(action: Action<string>) {
    yield put(deleteBook(action.payload!))
}

export function* rootLibrarySaga() {
    yield all([takeLatest(SAGA_ADD_BOOK_DATA, addBookToLibrary), takeLatest(SAGA_REMOVE_BOOK_DATA, removeBook)])
}