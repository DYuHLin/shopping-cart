import React from "react";
import Nav from "./Components/Nav";
import "./Style/style.css";
import Shop from "./Components/Shop";
import Contact from "./Components/Contact";
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />

            <Routes>
              <Route path="/shop" Component={Shop} />
              <Route path="/contact" Component={Contact} />
              <Route path="/" Component={homePage} />
            </Routes>

      </div>
    </Router>
  );
}

const homePage = () => {
  return (
    <div className="homePage">
      Home Page
    </div>
  );
};

export default App;
