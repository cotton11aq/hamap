import React from "react";

const SecHeadText = (props) => {
  return (
    <>
      <div className="sechead" id="idsechead">
        <div className="sechead-white">
          <div className="sechead-wrapper">
            <div className="sechead-title">
              <h3>What's {props.title} ?</h3>
            </div>
            <div className="sechead-titlesub">
              <p>
                {props.sub01}
                <br />
                {props.sub02}
                <br />
                {props.sub03}
              </p>
            </div>
            <div className="sechead-map">
              <img src={props.map} alt="" />
            </div>
            <div className="sechead-text">
              <p>
                {props.text01}
                <br />
                {props.text02}
                <br />
                {props.text03}
              </p>
            </div>
          </div>
          <div className="sechead-img">
            <img src={props.pic} alt="pictures" />
            <div className="sechead-link">
              <a className={props.className} href={props.href} target="break">
                {props.linkname}
              </a>
            </div>
            <div>
              <a className={props.className} href={props.href02} target="break">
                {props.linkname02}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecHeadText;
