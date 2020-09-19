//Navbar or header component
import React from "react";
import NavItem from "./NavItem.js";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav>
        <ul>
          <NavItem name="Home" />
          <NavItem name="Products" />
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
