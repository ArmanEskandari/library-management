// Hooks
import React, {useState} from 'react';
import {useDispatch} from "react-redux";
// Components
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
// Types
import type {Book} from "../../types/global.types";
// Actions
import {addBookToLibrarySaga} from "../../store/Library/library.actions";

const AddBooks = () => {

    // hooks
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);
    const [book, setBook] = useState<Book>({
        id: '',
        title: '',
        releaseDate: '',
        price: 0,
        rate: 0,
        author: '',
    })

    // handlers
    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
        dispatch(addBookToLibrarySaga({...book, id: Date.now().toString()}))
    }


    return (
        <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
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
                <Form.Group as={Col} md="4" controlId="validationCustom02">
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
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
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
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
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
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        value={book.author}
                        onChange={(e) => setBook({...book, author: e.target.value})} type="text" placeholder="Author"
                        required/>
                    <Form.Control.Feedback type="invalid">
                        Please the author's name.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Submit form</Button>
        </Form>
    );
}

export default AddBooks;