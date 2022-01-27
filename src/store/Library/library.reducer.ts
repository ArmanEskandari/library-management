import type {LibraryState} from "./library.types";
import type {Action} from "../../types/global.types";
import {ADD_AUTHOR, ADD_BOOK_DATA, DELETE_AUTHOR, REMOVE_BOOK} from "./library.constants";

export const initialLibraryState: LibraryState = {
    books: [],
    authors: []
}

export const libraryReducer = (state = initialLibraryState, action: Action) => {
    switch (action.type) {
        case ADD_BOOK_DATA:
            return {
                ...state,
                books: [...state.books, action.payload]
            }

        case REMOVE_BOOK:
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload)
            }

        case ADD_AUTHOR:
            return {
                ...state,
                authors: [...state.authors, action.payload]
            }

        case DELETE_AUTHOR:
            return {
                ...state,
                books: state.books.filter(book => book.author.id !== action.payload), // also removes this authors books
                authors: state.authors.filter(author => author.id !== action.payload)
            }

        default:
            return state
    }
}