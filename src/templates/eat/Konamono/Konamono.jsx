import React from "react";
import { GenreHeadTitle, Header } from "../../../assets/components/index";
import { KonamonoCardList } from "../../index";
import konamono from "../../../assets/img/icon/black/black_konamono.png";

const Konamono = (props) => {
  return (
    <>
      <div id="idkonamono"></div>
      <Header />
      <GenreHeadTitle title={"粉物"} logo={konamono} id={"none"} />
      <div className="eat">
        <div className="tophead-map">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1mbeu9lSw7U5R5CIeJ_PQFtgpYCjeTKGr"
            title="konamonomap"
          ></iframe>
          <a
            href="https://www.google.com/maps/d/u/0/embed?mid=1mbeu9lSw7U5R5CIeJ_PQFtgpYCjeTKGr"
            target="_brank"
            className="eat-maplink"
          >
            GoogleMapで見る ＞
          </a>
        </div>
        <KonamonoCardList title={"粉物"} logo={konamono} />
      </div>
    </>
  );
};

export default Konamono;
