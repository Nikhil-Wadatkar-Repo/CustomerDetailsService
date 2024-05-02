import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <NavLink to="/main">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
