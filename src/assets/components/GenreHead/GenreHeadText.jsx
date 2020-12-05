import React from "react";

const GenreHeadText = (props) => {
  return (
    <>
      <div className={props.className} id={props.id}>
        <div className="lets-container">
          <div className="lets-texts">
            <div className="lets-title">
              <h3>{props.title}</h3>
            </div>
            <div className="lets-sub">
              <p>
                {props.sub}
                <br />
                {props.sub02}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenreHeadText;
