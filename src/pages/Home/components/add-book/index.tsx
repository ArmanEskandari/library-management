// Hooks
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
// Components
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
// Types
import type {Book} from "../../../../types/global.types";
import {RootState} from "../../../../store/store.types";
import {LibraryState} from "../../../../store/Library/library.types";
// Actions
import {addBookToLibrarySaga} from "../../../../store/Library/library.actions";
//stylesheet
import "./styles.css";

const AddBooks = () => {

    // hooks
    const dispatch = useDispatch();
    const state = useSelector<RootState, LibraryState>(state => state.library)
    const [validated, setValidated] = useState(false);
    const [book, setBook] = useState<Book>({
        id: '',
        title: '',
        releaseDate: '',
        price: 0,
        rate: 0,
        author: {
            id: '',
            name: '',
            publishedCount: 0
        },
    })

    // handlers
    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            return setValidated(false)
        }
        setValidated(true);
        dispatch(addBookToLibrarySaga({...book, id: Date.now().toString()}))
    }

    /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown")?.classList.toggle("show");
    }

    function filterFunction() {
        let input, filter, a, i;
        input = document.getElementById("myInput");
        // @ts-ignore
        filter = input?.value?.toUpperCase();
        let div = document.getElementById("myDropdown");
        a = div?.getElementsByTagName("button");
        // @ts-ignore
        for (i = 0; i < a.length; i++) {
            // @ts-ignore
            const txtValue = a[i].textContent || a[i].innerText;
            if (txtValue?.toUpperCase().indexOf(filter) > -1) {
                // @ts-ignore
                a[i].style.display = "";
            } else {
                // @ts-ignore
                a[i].style.display = "none";
            }
        }
    }


    return (
        <div className="container mb-5">
            <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group className="w-25" as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            value={book.title}
                            onChange={(e) => setBook({...book, title: e.target.value})}
                            required
                            type="text"
                            placeholder="Title"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="w-25" as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Release date</Form.Label>
                        <Form.Control
                            value={book.releaseDate}
                            onChange={(e) => setBook({...book, releaseDate: e.target.value})}
                            required
                            type="date"
                            placeholder="Release date"
                        />
                        <Form.Control.Feedback type="invalid">Please enter a valid date.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="w-25" as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Price</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">Price</InputGroup.Text>
                            <Form.Control
                                value={book.price}
                                onChange={(e) => setBook({...book, price: parseInt(e.target.value)})}
                                type="number"
                                min={0}
                                placeholder="Price"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter the price.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="w-25" as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Rate</Form.Label>
                        <Form.Control
                            value={book.rate}
                            onChange={(e) => setBook({...book, rate: parseInt(e.target.value)})}
                            type="number"
                            min={0}
                            max={5}
                            placeholder="Rate"
                            required/>
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid rate.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="w-25" as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Author</Form.Label>
                        <div className="input-group mb-3">
                            <input
                                disabled
                                value={book.author.name}
                                onChange={(e) => setBook({
                                    ...book, author: {
                                        ...book.author,
                                        name: e.target.value
                                    }
                                })}
                                type="text" placeholder="Author"
                                required className="form-control"
                                aria-label="Author" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button onClick={myFunction} className="btn btn-outline-secondary dropbtn"
                                        type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </button>
                                <div id="myDropdown" className="dropdown-content">
                                    <input type="text" placeholder="Search.." id="myInput" onKeyUp={filterFunction}/>
                                    {
                                        state.authors.map(author => (
                                            <div key={author.id}
                                                 className="d-flex flex-column"
                                            >
                                                <button
                                                    className="btn btn-outline-dark"
                                                    onClick={() => setBook({
                                                        ...book,
                                                        author: {
                                                            id: author.id,
                                                            name: author.name,
                                                            publishedCount: author.publishedCount
                                                        }
                                                    })}>
                                                    {author.name}
                                                </button>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <Form.Control.Feedback type="invalid">
                            Please the author's name.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    );
}

export default AddBooks;