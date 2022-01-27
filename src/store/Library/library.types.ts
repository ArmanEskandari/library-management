import {Author, Book} from "../../types/global.types";

export type LibraryState = {
    books: Book[],
    authors: Author[]
}