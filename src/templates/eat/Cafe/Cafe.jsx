import React from "react";
import { GenreHeadTitle, Header } from "../../../assets/components/index";
import { CafeCardList } from "../../index";
import cafe from "../../../assets/img/icon/black/black_cafe.png";

const Cafe = (props) => {
  return (
    <>
      <div id="idcafe"></div>
      <Header />
      <GenreHeadTitle title={"喫茶店"} logo={cafe} id={"none"} />
      <div className="eat">
        <div className="tophead-map">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=10x_qhKQRjaa82EBSI2pQklp5RtxcR9sY"
            title="cafemap"
          ></iframe>
          <a
            href="https://www.google.com/maps/d/u/0/embed?mid=10x_qhKQRjaa82EBSI2pQklp5RtxcR9sY"
            target="_brank"
            className="eat-maplink"
          >
            GoogleMapで見る ＞
          </a>
        </div>
        <CafeCardList title={"喫茶店"} logo={cafe} />
      </div>
    </>
  );
};

export default Cafe;
