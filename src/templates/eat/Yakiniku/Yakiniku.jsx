import React from "react";
import { GenreHeadTitle, Header } from "../../../assets/components/index";
import { YakinikuCardList } from "../../index";
import yakiniku from "../../../assets/img/icon/black/black_yakiniku.png";

const Yakiniku = (props) => {
  return (
    <>
      <div id="idyakiniku"></div>
      <Header />
      <GenreHeadTitle title={"焼肉"} logo={yakiniku} id={"none"} />
      <div className="eat">
        <div className="tophead-map">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1e1n6Jz6lkfPoZJ7dDH4svaRzQ0k2Jarj"
            title="yakinikumap"
          ></iframe>
          <a
            href="https://www.google.com/maps/d/u/0/embed?mid=1e1n6Jz6lkfPoZJ7dDH4svaRzQ0k2Jarj"
            target="_brank"
            className="eat-maplink"
          >
            GoogleMapで見る ＞
          </a>
        </div>
        <YakinikuCardList title={"焼肉"} logo={yakiniku} />
      </div>
    </>
  );
};

export default Yakiniku;
