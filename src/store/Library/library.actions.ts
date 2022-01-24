import type {Action, Book} from "../../types/global.types";
import {ADD_BOOK_DATA, SAGA_ADD_BOOK_DATA} from "./library.constants";


export const addBook = (book: Book): Action<Book> => ({
    type: ADD_BOOK_DATA,
    payload: book
})

export const saveRecordToStorage = () => ({})

export const addBookToLibrarySaga = (book: Book): Action<Book> => {
    return {
        type: SAGA_ADD_BOOK_DATA,
        payload: book,
    };
};