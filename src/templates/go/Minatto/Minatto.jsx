import React from "react";
import {
  GenreHeadTitle,
  SecHeadText,
  Header,
  SecHeadArrow,
} from "../../../assets/components/index";
import { MinattoCardList } from "../../index";
import map_minatto from "../../../assets/img/map/area_minatto.png";
import sec_minatto from "../../../assets/img/sechead/minatto_picture.png";
import logo_minatto from "../../../assets/img/icon/black/black_minatto.png";

const Minatto = () => {
  return (
    <>
      <div id="idminatto"></div>
      <Header />
      <GenreHeadTitle logo={logo_minatto} title={"みなっと"} />
      <div className="toppic">
        <div className="toppic-minatto"></div>
      </div>
      <SecHeadText
        title={"みなっと"}
        sub01={"八幡浜港に位置する"}
        sub02={"みなとのオアシス"}
        sub03={"道の駅「みなっと」"}
        text01={
          "みなとオアシス八幡浜「みなっと」は、四国の西野玄関口にある八幡浜港ある道の駅です。"
        }
        text02={
          "構内には様々な施設があり、イベントや市民活動の拠点となる「みなと交流館」、食のテーマパーク「アゴラマルシェ」、そして地元でとれた新鮮で豊富な魚介類がずらりと並ぶ「どーや市場」など、見どころがたくさんあります。"
        }
        map={map_minatto}
        pic={sec_minatto}
        href={"https://www.minatto.net/data"}
        href02={"https://do-ya-ichiba.jp/dining.php"}
        linkname={"出典：道の駅・みなとオアシス 八幡浜みなっとHP"}
        linkname02={"出典：どーや食堂HP"}
      />
      <SecHeadArrow />
      <div className="eat">
        <div className="tophead-map">
          <iframe
            className="fa"
            src="https://www.google.com/maps/d/u/0/embed?mid=14sE3mYiLkhYk4BaftoLxH2-b918P3e62"
            title="minattomap"
          ></iframe>
          <a
            href="https://www.google.com/maps/d/u/0/embed?mid=14sE3mYiLkhYk4BaftoLxH2-b918P3e62"
            target="_brank"
            className="eat-maplink"
          >
            GoogleMapで見る ＞
          </a>
        </div>
        <MinattoCardList logo={logo_minatto} title={"みなっと"} />
      </div>
    </>
  );
};

export default Minatto;
