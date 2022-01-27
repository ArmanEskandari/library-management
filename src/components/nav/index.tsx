import * as React from "react";
import {NavLink} from "react-router-dom";

export function NavList() {

    const activeClassName = 'nav-link active';

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Library</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        isActive ? activeClassName : 'nav-link'
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="books"
                                    className={({isActive}) =>
                                        isActive ? activeClassName : 'nav-link'
                                    }
                                >
                                    Books
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="authors"
                                    className={({isActive}) =>
                                        isActive ? activeClassName : 'nav-link'
                                    }
                                >
                                    authors
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}