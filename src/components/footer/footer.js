import React from "react";
import footerIcon from "../../assets/footerIcon.svg";
import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="tag">
        <p className="note"> Thoughtfuly made</p>
        <img src={footerIcon} />
      </div>
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

export default Footer;
