import React from "react";
import { GenreHeadTitle, Header } from "../../../assets/components/index";
import { IzakayaCardList } from "../../index";
import izakaya from "../../../assets/img/icon/black/black_izakaya.png";

const Izakaya = (props) => {
  return (
    <>
      <div id="idizakaya"></div>
      <Header />
      <GenreHeadTitle title={"居酒屋"} logo={izakaya} id={"none"} />
      <div className="eat">
        <div className="tophead-map">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1wuHW-W2VgHmDsJ4SWDcfVOl0Ydr5mtHl"
            title="izakayamap"
          ></iframe>
          <a
            href="https://www.google.com/maps/d/u/0/embed?mid=1wuHW-W2VgHmDsJ4SWDcfVOl0Ydr5mtHl"
            target="_brank"
            className="eat-maplink"
          >
            GoogleMapで見る ＞
          </a>
        </div>
        <IzakayaCardList title={"居酒屋"} logo={izakaya} />
      </div>
    </>
  );
};

export default Izakaya;
