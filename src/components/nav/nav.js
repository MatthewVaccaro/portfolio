import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/logo.svg";
const Nav = () => {
  return (
    <div className="navContainer">
      <img src={logo}></img>
      <nav>
        <NavLink to="/" exact activeStyle={{ color: "#000" }}>
          WORK
        </NavLink>
        <NavLink to="/about" exact activeStyle={{ color: "#000" }}>
          ABOUT
        </NavLink>
        <button>RESUME</button>
      </nav>
    </div>
  );
};

export default Nav;
