import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
// Components
import {Pagination} from "./components/pagination";
import {Button, Modal} from "react-bootstrap";
// Types
import type {RootState} from "../../store/store.types";
import type {TableState} from "../../store/Table/table.types";
import type {LibraryState} from "../../store/Library/library.types";
// Actions
import {handleTableRowsByPage} from "../../store/Table/table.actions";
import {deleteBookSaga} from "../../store/Library/library.actions";

interface TableProps {
    state: LibraryState
}

const BooksTable = (props: TableProps) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState('')
    const state = useSelector<RootState, TableState>((state) => {
        return state.table;
    });
    const dispatch = useDispatch();

    const onClickNewPage = (page: number) => {
        dispatch(handleTableRowsByPage({page, books: props.state.books}));
    };

    const handleDelete = (id: string) => {
        dispatch(deleteBookSaga(id))
        setModalOpen(false)
        setSelectedItem('')
    }
    const handleClose = () => {
        setSelectedItem('')
        setModalOpen(false)
    };
    const handleShow = (id: string) => {
        setSelectedItem(id)
        setModalOpen(true)
    };


    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Release date</th>
                    <th scope="col">Price</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Operations</th>
                </tr>
                </thead>
                <tbody>
                {state.rows?.map((item, index) => (
                    <tr key={item.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.title}</td>
                        <td>{item.author.name}</td>
                        <td>{item.releaseDate}</td>
                        <td>{item.price}</td>
                        <td>{item.rate}</td>
                        <td>
                            <Button className='btn-danger' onClick={() => handleShow(item.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Pagination total={state.totalLength} onClick={onClickNewPage} currentPage={state.currentPage}/>

            <Modal
                show={modalOpen}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this book?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleDelete(selectedItem)}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default BooksTable;