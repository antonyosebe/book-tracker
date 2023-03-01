import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="site-title">BOOK TRACKER</div>
            <NavLink to="/" end>HOME</NavLink>
        </nav>
    )
}

export default Navigation;