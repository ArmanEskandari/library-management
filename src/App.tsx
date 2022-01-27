// Hooks
import React from "react";
// components
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
// Stylesheets
import './App.css';
import {NavList} from "./components/nav";
import BooksPage from "./pages/Books";
import AuthorsPage from "./pages/Authors";

function App() {

    return (
        <div className="App">
            <NavList/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/books" element={<BooksPage/>}/>
                <Route path="/authors" element={<AuthorsPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
