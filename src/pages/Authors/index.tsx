import React from 'react';
// Hooks
import {useSelector} from "react-redux";
// Components
import AddAuthorForm from "./components/add-form";
import AuthorsTable from "./components/table";
// Types
import type {RootState} from "../../store/store.types";
import type {LibraryState} from "../../store/Library/library.types";

const AuthorsPage = () => {
    const state = useSelector<RootState, LibraryState>(state => state.library);

    return (
        <div className="container">
            <AddAuthorForm/>
            <AuthorsTable state={state}/>
        </div>
    );
};

export default AuthorsPage;