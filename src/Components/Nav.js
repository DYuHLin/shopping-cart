import React from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";
import { useContext } from "react";

const Nav = () => {

    const { items } = useContext(CartContext);

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
                    <Link to = "/cart">
                        <li><i class='bx bx-cart-alt'><span className="am">{items.length}</span></i></li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;