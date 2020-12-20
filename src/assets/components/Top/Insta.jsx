import React from "react";

const Insta = () => {
  return (
    <>
      <div className="insta">
        <div className="insta-wrapper">
          <div className="insta-pics">
            <a
              href="https://www.instagram.com/p/CGHuJEeD4Xf/"
              className="insta-container insta-container01"
              target="_blank"
              rel="noreferrer"
            >
              <div className="insta-pic insta-pic01"></div>
            </a>
            <a
              href="https://www.instagram.com/p/BpZCqLKlWol/"
              className="insta-container insta-container02"
              target="_blank"
              rel="noreferrer"
            >
              <div className="insta-pic insta-pic02"></div>
            </a>
            <a
              href="https://www.instagram.com/p/Bi1U5TgnYzQ/"
              className="insta-container insta-container03"
              target="_blank"
              rel="noreferrer"
            >
              <div className="insta-pic insta-pic03"></div>
            </a>
            <a
              href="https://www.instagram.com/p/BjHTdtuHwnB/"
              className="insta-container insta-container04"
              target="_blank"
              rel="noreferrer"
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
              <p>
                to Instagram <i className="fab fa-instagram fa-2x"></i>
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insta;
