// component for each nav bar item
import React from "react";

const NavItem = (props) => {
  return (
    <li className="navItem">
      <a href={"./" + props.name.toLowerCase()}> {props.name}</a>
    </li>
  );
};
export default NavItem;
