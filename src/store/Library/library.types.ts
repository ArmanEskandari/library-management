import {Book} from "../../types/global.types";

export type LibraryState = {
    books: Book[],
    authors: author[]
}

export type author = {
    name: string,
    publishedCount: number
}