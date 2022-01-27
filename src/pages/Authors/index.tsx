import React from 'react';
import AddAuthorForm from "./components/add-form";
import AuthorsTable from "./components/table";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store.types";
import {LibraryState} from "../../store/Library/library.types";

const AuthorsPage = () => {
    const state = useSelector<RootState, LibraryState>(state => state.library);

    return (
        <div>
            <AddAuthorForm/>
            <AuthorsTable state={state}/>
        </div>
    );
};

export default AuthorsPage;