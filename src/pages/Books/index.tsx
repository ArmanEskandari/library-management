import React, {useEffect} from 'react';
import BooksTable from "../../components/books-table";
import {useDispatch, useSelector} from "react-redux";
import {handleTableRowsByPage} from "../../store/Table/table.actions";
import {RootState} from "../../store/store.types";
import {LibraryState} from "../../store/Library/library.types";
import {TableState} from "../../store/Table/table.types";

const BooksPage = () => {
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

export default BooksPage;