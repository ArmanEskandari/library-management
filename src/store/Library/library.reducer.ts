import type {LibraryState} from "./library.types";
import type {Action} from "../../types/global.types";
import {ADD_BOOK_DATA} from "./library.constants";

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
        default:
            return state
    }
}