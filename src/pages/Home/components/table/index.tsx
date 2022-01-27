import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
// Types
import type {RootState} from "../../../../store/store.types";
import type {LibraryState} from "../../../../store/Library/library.types";
import type {TableState} from "../../../../store/Table/table.types";
// Actions
import {handleTableRowsByPage} from "../../../../store/Table/table.actions";
// Components
import BooksTable from "../../../../components/books-table";

const Books = () => {
    const dispatch = useDispatch()
    const libState = useSelector<RootState, LibraryState>(state => state.library)
    const tabState = useSelector<RootState, TableState>(state => state.table)

    useEffect(() => {
        dispatch(handleTableRowsByPage({page: tabState.currentPage, books: libState.books}))
    }, [libState])

    return (
        <BooksTable state={libState}/>
    );
};

export default Books;
