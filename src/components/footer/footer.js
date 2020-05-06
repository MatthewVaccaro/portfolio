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
        <a
          target="blank"
          href="https://www.dropbox.com/s/d32w0ripdrjvf0v/MattVaccaro%20-%202020%20-%20Resume.pdf?dl=0"
        >
          <button>RESUME</button>
        </a>
      </nav>
    </div>
  );
};

export default Footer;
