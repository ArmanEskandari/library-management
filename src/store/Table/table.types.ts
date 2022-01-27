import {Book} from "../../types/global.types";

export type TableState = {
    rows: Book[];
    currentPage: number;
    totalLength: number;
};

// export type TableItem = {
//     id: number;
//     title: string;
//     author: string;
//     email: string;
//     gender: string;
//     ip_address: string;
// };