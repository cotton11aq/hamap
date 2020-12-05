import React from "react";
import { GenreHeadTitle, Header } from "../../../assets/components/index";
import { ChanponCardList } from "../../index";
import chanpon from "../../../assets/img/icon/black/black_chanpon.png";

const Chanpon = (props) => {
  return (
    <>
      <div id="idchanpon"></div>
      <Header />
      <GenreHeadTitle title={"ちゃんぽん"} logo={chanpon} id={"none"} />
      <div className="eat">
        <div className="tophead-map">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=10KS8Oxao9hghi7zK4Isbfre2b-rRID3N"
            title="chanponmap"
          ></iframe>
          <a
            href="https://www.google.com/maps/d/u/0/embed?mid=10KS8Oxao9hghi7zK4Isbfre2b-rRID3N"
            target="_brank"
            className="eat-maplink"
          >
            GoogleMapで見る ＞
          </a>
        </div>
        <ChanponCardList title={"ちゃんぽん"} logo={chanpon} />
      </div>
    </>
  );
};

export default Chanpon;
