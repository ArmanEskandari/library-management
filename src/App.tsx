// Hooks
import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
// Actions
import {initSaga} from "./store/Table/table.actions";
// components
import AddBooks from "./pages/add-book";
// Stylesheets
import './App.css';

function App() {
    // hooks
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initSaga())
    }, [])

    return (
        <div className="App">
            <AddBooks/>
        </div>
    );
}

export default App;
