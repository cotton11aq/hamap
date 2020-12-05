import React from "react";
import { GenreHeadTitle, Header } from "../../../assets/components/index";
import { KaisenCardList } from "../../index";
import kaisen from "../../../assets/img/icon/black/black_kaisen.png";

const Kaisen = (props) => {
  return (
    <>
      <div id="idkaisen"></div>
      <Header />
      <GenreHeadTitle title={"海鮮"} logo={kaisen} id={"none"} />
      <div className="eat">
        <div className="tophead-map">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1wi8JNwdh8gr7LDYXCq_Dtsywl8bTE9W8"
            title="kaisenmap"
          ></iframe>
          <a
            href="https://www.google.com/maps/d/u/0/embed?mid=1wi8JNwdh8gr7LDYXCq_Dtsywl8bTE9W8"
            target="_brank"
            className="eat-maplink"
          >
            GoogleMapで見る ＞
          </a>
        </div>
        <KaisenCardList title={"海鮮"} logo={kaisen} />
      </div>
    </>
  );
};

export default Kaisen;
