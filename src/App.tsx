import React from "react";
// components
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

import {NavList} from "./components/nav";
import AuthorsPage from "./pages/Authors";
// Stylesheets
import './App.css';

function App() {

    return (
        <div className="App">
            <NavList/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/authors" element={<AuthorsPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
