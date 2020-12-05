import React from "react";
import { HashLink } from "react-router-hash-link";

const EatPic = (props) => {
  return (
    <>
      <div className="eatpic-wrapper">
        <div className="eatpic-content">
          <div className="eatpic-link">
            <HashLink to={props.link} className={props.className} href="#">
              <div className="eatpic-box">
                <div className="eatpic-icon">
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
