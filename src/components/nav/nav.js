import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import "./nav.css";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
const Nav = () => {
  let fadeIn = useRef(null);

  useEffect(() => {
    gsap.from([fadeIn], {
      opacity: 0,
      delay: 0.5,
      ease: "power3.out",
      y: 0,
      stagger: {
        amount: 0.15
      }
    });
  }, [fadeIn]);

  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    console.log(toggle);
    setToggle(!toggle);
  };
  return (
    <>
      <div ref={animation => (fadeIn = animation)} className="navContainer">
        <img src={logo}></img>
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

      {/* Mobile Nav */}

      <div className="mobileNavContainer">
        <div className="mobileNav">
          <img className="mobileLogo" src={logo}></img>
          <img onClick={toggler} src={menu} className="menu" />
        </div>
        <div
          onClick={toggler}
          className={toggle ? "menu_container" : "menu_container hidden_menu"}
        >
          <nav className={toggle ? "mobile" : "mobile_hidden"}>
            <NavLink onClick={toggler} to="/">
              HOME
            </NavLink>
            <NavLink onClick={toggler} to="/about">
              ABOUT
            </NavLink>
            <a
              onClick={toggler}
              target="blank"
              href="https://www.dropbox.com/s/d32w0ripdrjvf0v/MattVaccaro%20-%202020%20-%20Resume.pdf?dl=0"
            >
              <button>RESUME</button>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
