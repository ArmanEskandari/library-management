import * as React from "react";
import {NavLink} from "react-router-dom";

export function NavList() {
    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently selected.
    let activeStyle = {
        textDecoration: "underline"
    };

    let activeClassName = "underline"

    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        style={({isActive}) =>
                            isActive ? activeStyle : {}
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="authors"
                        className={({isActive}) =>
                            isActive ? activeClassName : ''
                        }
                    >
                        Books
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}