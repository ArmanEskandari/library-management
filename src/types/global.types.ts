
export type Action<P = unknown> = {
    type: string
    payload?: P
}

export type Book = {
    id: string
    title: string
    releaseDate: string
    price: number
    rate: number
    author: Author
}

export type Author = {
    id: string,
    name: string,
    publishedCount: number
}

