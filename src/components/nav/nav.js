import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import "./nav.css";
import logo from "../../assets/logo.svg";
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
  return (
    <div ref={animation => (fadeIn = animation)} className="navContainer">
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
