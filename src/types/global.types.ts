export type Action<P = unknown> = {
    type: string
    payload?: P
}