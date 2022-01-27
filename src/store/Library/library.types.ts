import {Book} from "../../types/global.types";

export type LibraryState = {
    books: Book[],
    authors: Author[]
}

export type Author = {
    id: string,
    name: string,
    publishedCount: number
}