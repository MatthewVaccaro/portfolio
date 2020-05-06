import React, { useEffect, useRef } from "react";
import { data } from "../../data/projectData";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "./view.css";

import Card from "../projectCard/projectCard";

import Twitter from "../../assets/twitter.svg";
import LinkedIn from "../../assets/linkedIn.svg";
import blueRight from "../../assets/blueRight.svg";
import greenLeft from "../../assets/greenLeft.svg";
import bottomGraphic from "../../assets/bottomGraphic.svg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let line = useRef(null);
  let line2 = useRef(null);
  let fadeIn = useRef(null);
  let other = useRef(null);

  useEffect(() => {
    gsap.from([line, line2], {
      opacity: 0,
      delay: 1,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.15
      }
    });
  }, [line, line2]);

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
    <>
      <div ref={animation => (fadeIn = animation)} className="masterContainer">
        <div ref={animation => (line = animation)} className="header">
          <h1>Hey, I'm Matt!</h1>
          <h3>
            I am a product designer, a curious thinker, and most of all, a
            friend! I spend my time hanging with my wife, doggos, and trying to
            make myself better everyday!
          </h3>
          <div className="socialButtons">
            <a
              className="iconLink"
              target="_blank"
              href="https://twitter.com/EarHolesMcgee"
            >
              <img className="icons" src={Twitter} />
            </a>
            <a
              className="iconLink"
              target="_blank"
              href="https://www.linkedin.com/in/matthew-vaccaro-409158119/"
            >
              <img className="icons" src={LinkedIn} />
            </a>
          </div>
        </div>
        <img className="blueRight" src={blueRight} />
        <img className="greenLeft" src={greenLeft} />
      </div>
      <h2 ref={animation => (line2 = animation)}>WORK</h2>
      {data
        ? data.map(cv => {
            return <Card data={cv} />;
          })
        : "no data"}
      <p className="note"> Additional work available upon request</p>
      <img className="bottomGraphic" src={bottomGraphic} />
      <div className="greetingCard">
        <h2>Pleasure Meeting You!</h2>
        <h3>
          I love meeting new people, so don’t be a stranger and reach out on
          Twitter or Linked In! You can also
          <Link to="/about"> learn more </Link> about me if you're curious.
        </h3>
        <div className="socialButtons">
          <a
            className="iconLink"
            target="_blank"
            href="https://twitter.com/EarHolesMcgee"
          >
            <img className="icons" src={Twitter} />
          </a>
          <a
            className="iconLink"
            target="_blank"
            href="https://www.linkedin.com/in/matthew-vaccaro-409158119/"
          >
            <img className="icons" src={LinkedIn} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
