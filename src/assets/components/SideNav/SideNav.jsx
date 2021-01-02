import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { TwitterShareButton } from "react-share";

class IconCard extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
        <div className="sidenav">
          <div className="sidenav-left01">
            <h4>SHARE</h4>
            <ul>
              <li>
                <TwitterShareButton
                  url={["hamap-gourmet.com"]}
                  title={[
                    "はまっぷグルメ | 日本の端まで、やわたはまの美味しい！を写真とともに紹介",
                  ]}
                >
                  <i className="fab fa-twitter fa-3x"></i>
                </TwitterShareButton>
              </li>
            </ul>
          </div>
          <div className="sidenav-left01 sidenav-left02">
            <h4>SNS</h4>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/hamap_gourmet/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="sidenav-right01">
            <h4>HAMAP</h4>
            <ul>
              <li>
                <h4>
                  <a id="sidenav-top" href="#top" onClick={this.scrollToTop}>
                    TO TOP
                  </a>
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default IconCard;
