import React from "react";
import arrow from "../../img/cardlist/arrow.png";

const Insta = () => {
  return (
    <>
      <div className="insta">
        <div className="insta-wrapper">
          <div className="insta-pics">
            <a
              href="https://www.instagram.com/p/CGHuJEeD4Xf/"
              className="insta-container insta-container01"
            >
              <div className="insta-pic insta-pic01"></div>
            </a>
            <a
              href="https://www.instagram.com/p/BsaNzXmgaWy/"
              className="insta-container insta-container02"
            >
              <div className="insta-pic insta-pic02"></div>
            </a>
            <a
              href="https://www.instagram.com/p/BpZCqLKlWol/"
              className="insta-container insta-container03"
            >
              <div className="insta-pic insta-pic03"></div>
            </a>
            <a
              href="https://www.instagram.com/p/Bna4JbpFE1B/"
              className="insta-container insta-container04"
            >
              <div className="insta-pic insta-pic04"></div>
            </a>
          </div>
          <div className="insta-btn" id="ideat">
            <a
              href="https://www.instagram.com/hamap_gourmet/"
              target="brank"
              className="insta-text"
            >
              <p>to Instagram</p>
              <img src={arrow} alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insta;
