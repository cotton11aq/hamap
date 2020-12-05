import React from "react";
import { HashLink } from "react-router-hash-link";

const EatPic = (props) => {
  return (
    <>
      <div className="gopic-wrapper">
        <div className="gopic-content">
          <div className="gopic-link">
            <HashLink to={props.link} className={props.className} href="#">
              <div className="gopic-box">
                <div className="gopic-icon">
                  <img src={props.icon} alt="icon" />
                </div>
                <p>
                  {props.name}
                  <span>{props.namesub}</span>
                </p>
              </div>
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default EatPic;
