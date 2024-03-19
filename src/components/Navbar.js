import React, { useState } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen); // Toggle the state of navOpen
  };

  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo"> AlexTraning </h1>

        <div className="menu-icons" onClick={handleClick}>
          <i className={navOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={navOpen ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i> {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
