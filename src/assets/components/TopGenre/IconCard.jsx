import React from "react";
import { HashLink } from "react-router-hash-link";

const IconCard = (props) => {
  return (
    <>
      <HashLink to={props.link} className="genre-card">
        <div className="genre-wrapper">
          <div className="genre-container">
            <div className="genre-icon">
              <img src={props.img} alt="icon" />
            </div>
            <div className="genre-title">
              <p>
                {props.title}
                <span className={props.className}>{props.sub}</span>
              </p>
            </div>
          </div>
        </div>
      </HashLink>
    </>
  );
};

export default IconCard;
