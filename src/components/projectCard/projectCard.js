import React from "react";
import "./projectCard.css";

const Card = props => {
  const { logo, timeline, content, projectLink, caseStudy, name } = props.data;
  return (
    <>
      <div className="cardContainer">
        <div className="card">
          <div>
            <img className="brandLogo" src={logo} />
          </div>
          <h4>{timeline}</h4>
          <p>{content}</p>
          <div className="buttonContainer">
            <a target="_blank" className="buttonLink" href={projectLink}>
              <button className="projectBTN">VIEW {name} →</button>
            </a>
            <a target="_blank" className="buttonLink" href={caseStudy}>
              <button className="caseStudyBTN">READ CASE STUDY →</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
