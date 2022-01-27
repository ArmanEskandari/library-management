import type {Action, Author, Book} from "../../types/global.types";
import {
    ADD_AUTHOR,
    ADD_BOOK_DATA,
    DELETE_AUTHOR,
    REMOVE_BOOK,
    SAGA_ADD_AUTHOR,
    SAGA_ADD_BOOK_DATA,
    SAGA_DELETE_AUTHOR,
    SAGA_REMOVE_BOOK_DATA
} from "./library.constants";


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

export const addAuthorSaga = (author: { id: string, name: string }): Action => {
    return {
        type: SAGA_ADD_AUTHOR,
        payload: author
    }
}

export const deleteAuthorSaga = (id: string): Action<string> => {
    return {
        type: SAGA_DELETE_AUTHOR,
        payload: id
    }
}

export const deleteAuthor = (id: string): Action<string> => {
    return {
        type: DELETE_AUTHOR,
        payload: id
    }
}

export const addAuthor = (author: Author): Action<Author> => {
    return {
        type: ADD_AUTHOR,
        payload: author
    }
}