import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav className="header">
            <div className="logo">
                <Link to = "/">
                    <div className="logo-text">
                        Fake Store
                    </div>
                </Link>
            </div>
            <div className="links">
                <ul>
                    <Link to ="/shop">
                        <li>Shop</li>
                    </Link>
                    <Link to = "/contact">
                        <li>Contact</li>
                    </Link>                   
                    <Link to = "">
                        <li>Cart</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;