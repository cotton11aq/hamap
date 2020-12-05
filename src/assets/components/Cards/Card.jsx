import React from "react";
import arrow from "../../img/cardlist/arrow.png";
import { HashLink } from "react-router-hash-link";

const Card = (props) => {
  return (
    <>
      <div className="cardlist-flex">
        <HashLink to={props.link} className="cardlist-wrapper">
          <div className="cardlist-card">
            <div className="cardlist-pic">
              <img src={props.img} alt="cardlist_picture" />
            </div>
            <div className="cardlist-text">
              <h4>{props.title}</h4>
              <p>{props.sub}</p>
              <div className="cardlist-arrow">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </HashLink>
      </div>
    </>
  );
};

export default Card;
