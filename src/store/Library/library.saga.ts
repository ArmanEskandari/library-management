import {all, put, takeLatest} from "redux-saga/effects";
import type {Action, Author, Book} from "../../types/global.types";
import {addAuthor, addBook, deleteAuthor, deleteBook} from "./library.actions";
import {SAGA_ADD_AUTHOR, SAGA_ADD_BOOK_DATA, SAGA_DELETE_AUTHOR, SAGA_REMOVE_BOOK_DATA} from "./library.constants";


function* addBookToLibrary(action: Action<Book>) {
    yield put(addBook(action.payload!))
}

function* removeBook(action: Action<string>) {
    yield put(deleteBook(action.payload!))
}

function* addAuthorToDatabase(action: Action<Author>) {
    yield put(addAuthor(action.payload!))
}

function* deleteAuthorFromDatabase(action:Action<string>) {
    yield put(deleteAuthor(action.payload!))
}



export function* rootLibrarySaga() {
    yield all([
            takeLatest(SAGA_ADD_BOOK_DATA, addBookToLibrary),
            takeLatest(SAGA_REMOVE_BOOK_DATA, removeBook),
            takeLatest(SAGA_ADD_AUTHOR, addAuthorToDatabase),
        takeLatest(SAGA_DELETE_AUTHOR, deleteAuthorFromDatabase)
        ])
}