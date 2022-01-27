import type {Action, Book} from "../../types/global.types";
import {ADD_AUTHOR, ADD_BOOK_DATA, REMOVE_BOOK, SAGA_ADD_BOOK_DATA, SAGA_REMOVE_BOOK_DATA} from "./library.constants";
import {Author} from "./library.types";


export const addBook = (book: Book): Action<Book> => ({
    type: ADD_BOOK_DATA,
    payload: book
})

export const addBookToLibrarySaga = (book: Book): Action<Book> => {
    return {
        type: SAGA_ADD_BOOK_DATA,
        payload: book,
    };
};

export const deleteBookSaga = (id: string): Action<string> => {
    return {
        type: SAGA_REMOVE_BOOK_DATA,
        payload: id
    }
}

export const deleteBook = (id: string): Action<string> => {
    return {
        type: REMOVE_BOOK,
        payload: id
    }
}

export const addAuthor = (author: Author): Action<Author> => {
    return {
        type: ADD_AUTHOR,
        payload: author
    }
}