import React, { useState } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
const Navbar = () => {
  const toggleHandler = () => {
    setToggleState(!toggleState);
  };
  const [toggleState, setToggleState] = useState(false);
  return (
    <nav className="NavbarItems">
      <h1 className="" navbar-logo>
        Trippy
      </h1>
      <div className="menu-icons" onClick={toggleHandler}>
        <i className={toggleState ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={toggleState ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, key) => {
          return (
            <li key={key} className={item.cName}>
              <Link to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
