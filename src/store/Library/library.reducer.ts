import type {LibraryState} from "./library.types";
import type {Action} from "../../types/global.types";
import {ADD_BOOK_DATA, REMOVE_BOOK} from "./library.constants";

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

        default:
            return state
    }
}