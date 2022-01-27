import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Button, Col, Form, Row} from "react-bootstrap";
import {addAuthorSaga} from "../../../../store/Library/library.actions";

const AddAuthorForm = () => {

    // hooks
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);
    const [author, setAuthor] = useState({
        id: '',
        name: ''
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
        dispatch(addAuthorSaga({...author, id: Date.now().toString()}))
    }


    return (
        <div className="row">
            <div className="col">
                <Form
                    className='form-control'
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}>
                    <Row className="mb-3 d-flex justify-content-center">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Author's name</Form.Label>
                            <Form.Control
                                value={author.name}
                                onChange={(e) => setAuthor({...author, name: e.target.value})}
                                required
                                type="text"
                                placeholder="Author's name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Add author</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddAuthorForm;