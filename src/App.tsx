// Hooks
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
// Actions
// components
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Authors from "./pages/Books";
// Stylesheets
import './App.css';
import {NavList} from "./components/nav";
import BooksPage from "./pages/Books";

function App() {
    // hooks
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(initSaga())
    // }, [])

    return (
        <div className="App">
            <NavList/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/authors" element={<BooksPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
