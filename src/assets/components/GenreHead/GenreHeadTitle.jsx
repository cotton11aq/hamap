import React from "react";

const GenreHeadTitle = (props) => {
  return (
    <>
      <div className="tophead" id={props.id}>
        <div className="tophead-wrapper">
          <div className="tophead-text">
            <div className="tophead-icon">
              <img src={props.logo} alt="logo" />
            </div>
            <div className="tophead-title">
              <p>{props.title}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenreHeadTitle;
