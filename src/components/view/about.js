import React, { useEffect, useRef } from "react";
import "./about.css";
import photo from "../../assets/photo.png";
import { gsap } from "gsap";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let fadeIn = useRef(null);
  let fadeIn2 = useRef(null);
  let fadeIn3 = useRef(null);

  useEffect(() => {
    gsap.from([fadeIn], {
      opacity: 0,
      delay: 0.5,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.3
      }
    });
  }, [fadeIn]);

  useEffect(() => {
    gsap.from([fadeIn2, fadeIn3], {
      opacity: 0,
      delay: 1,
      ease: "power3.out",
      y: 0,
      stagger: {
        amount: 0
      }
    });
  }, [fadeIn2, fadeIn3]);
  return (
    <div className="aboutContainer">
      <div ref={animation => (fadeIn = animation)} className="about">
        <h1>About Me</h1>
        <h3>
          I believe there are depths to every human. Dig as deep as you would
          like.
        </h3>
      </div>
      <div ref={animation => (fadeIn2 = animation)} className="photo">
        <div className="profile">
          <img src={photo} />
        </div>
      </div>

      <div ref={animation => (fadeIn3 = animation)} className="depth1">
        <div className="depthContainer">
          <h2>Professional</h2>
          <h3>
            My name is Matthew Vaccaro and I have been a product designer for
            the last five years. I have worked for large companies like Capital
            One & lead my own start-up. I believe my biggest strengths are
            communication, adaptability, collaboration, and egolessness. I rely
            heavily on data and testing to make my decisions.
          </h3>
        </div>
      </div>
      <div className="depth2">
        <div className="depthContainer">
          <h2>Hung Out Once</h2>
          <h3>
            Most of my time is spent designing, learning to code, and listening
            to heavy metal music. I'm happily married to my wife, Bethany, with
            two wonderful dogs. George (Puggle) and Cady (Boston Terrier). I'm
            also a very competitive gamer, even though I am not very good...
          </h3>
        </div>
      </div>
      <div className="depth3">
        <div className="depthContainer">
          <h2>Colleagues</h2>
          <h3>
            I was born in New York but moved to Arizona when I was a wee lad. I
            lived in Arizona until I met my wife (surprisingly on the internet)
            and at the age of 19 moved to Southeast Texas to marry her. I now
            live in Nashville TN, continuing to refine my design & front-end
            coding skills.
          </h3>
        </div>
      </div>
      <div className="warning">
        <h4> ❗️ Warning: heavy but important stuff ️️️</h4>
      </div>
      <div className="depth4">
        <div className="depthContainer">
          <h2>Good Friends</h2>
          <h3>
            My father passed from cancer when I was 15 years old. It was
            devastating, but looking back now I can see it was a gift in
            disguise. My father was my best friend and I wanted to make him
            proud; this desire still bleeds into everything I do. As a boy, it
            built resilience and compassion. As a young man, it established my
            work ethic and the determination needed to never back down from a
            challenge. Finally, as a husband, it has inspired me to serve, lead,
            and constantly strive to be better.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
