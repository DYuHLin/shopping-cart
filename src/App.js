import React, {useState} from "react";
import Nav from "./Components/Nav";
import "./Style/style.css";
import Shop from "./Components/Shop";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import ItemPage from "./Components/ItemPage";
import {HashRouter as Router, Link, Route, Routes} from "react-router-dom";
import { CartProvider } from "./CartContext";

function App() {

  return (
    <Router>
      <div className="App"> 
      <div className="img-overlay"></div>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>      
      <CartProvider>
          <Nav />
          <div className="content">
          <Routes>
              <Route path="/shop/:id"  element={<ItemPage/>} />
              <Route path="/contact" Component={Contact} />
              <Route path="/cart" Component={Cart} />
              <Route path="/shop" Component={Shop} />
              <Route path="/" Component={homePage} />
            </Routes>
          </div>
        </CartProvider>
      </div>
    </Router>

  );
}

const homePage = () => {
  return (
    <div className="homePage">
      <div className="left">
        <div className="sub">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="blurb">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
        <Link to="/shop">
          <button className="shop-btn"> 
            Shop Now
            </button>
          </Link>
      </div>

      <div className="right">
        <div className="home-Image">
          <img className="home-pic" src = {`./img/homePic.jpg`} alt="fashionable people"/>
        </div>
      </div>
    </div>
  );
};

export default App;
