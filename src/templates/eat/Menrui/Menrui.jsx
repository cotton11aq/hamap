import React from "react";
import { GenreHeadTitle, Header } from "../../../assets/components/index";
import { MenruiCardList } from "../../index";
import menrui from "../../../assets/img/icon/black/black_menrui.png";

const Menrui = (props) => {
  return (
    <>
      <div id="idmenrui"></div>
      <Header />
      <GenreHeadTitle title={"麺類"} logo={menrui} id={"none"} />
      <div className="eat">
        <div className="tophead-map">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1asOGJnIAsIpiaX2DGqcF02iyrRJ1calh"
            title="menruimap"
          ></iframe>
          <a
            href="https://www.google.com/maps/d/u/0/embed?mid=1asOGJnIAsIpiaX2DGqcF02iyrRJ1calh"
            target="_brank"
            className="eat-maplink"
          >
            GoogleMapで見る ＞
          </a>
        </div>
        <MenruiCardList title={"麺類"} logo={menrui} />
      </div>
    </>
  );
};

export default Menrui;
