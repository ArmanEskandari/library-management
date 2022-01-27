import React from 'react';
// Components
import AddBooks from "./components/add-book";
import Books from "./components/table";

const Home = () => {
    return (
        <div>
            <AddBooks/>
            <Books/>
        </div>
    );
};

export default Home;