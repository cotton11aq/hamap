import React from "react";
import {
  GenreHeadTitle,
  SecHeadText,
  Header,
  SecHeadArrow,
} from "../../../assets/components/index";
import { YawatahamaekiCardList } from "../../index";
import map_yawatahamaeki from "../../../assets/img/map/area_yawatahamaeki.png";
import sec_yawatahamaeki from "../../../assets/img/sechead/yawatahamaeki_picture.png";
import logo_yawatahamaeki from "../../../assets/img/icon/black/black_yawatahamaeki.png";

const Yawatahamaeki = () => {
  return (
    <>
      <div id="idyawatahamaeki"></div>
      <Header />
      <GenreHeadTitle logo={logo_yawatahamaeki} title={"八幡浜駅"} />
      <div className="toppic">
        <div className="toppic-yawatahamaeki"></div>
      </div>
      <SecHeadText
        title={"八幡浜駅"}
        sub01={"八幡浜市の代表駅"}
        sub02={"みかんの香る"}
        sub03={"四国最西端の駅"}
        text01={
          "八幡浜市の代表駅である「八幡浜駅」は、全特急列車が停車します。また、観光列車「伊予灘ものがたり」の１往復が発着します。"
        }
        text02={
          "駅周辺にはちゃんぽん屋が多く集まり、その他居酒屋や海鮮も味わえるお店が集結しています。駅周辺には地元の方が植えたみかんの木があり、降車した瞬間からみかん香りをお楽しみいただけます。"
        }
        map={map_yawatahamaeki}
        pic={sec_yawatahamaeki}
        href={"https://wood.co.jp/9-building/station/station-115.html"}
        linkname={"出典：木の情報発信基地【木造の鉄道駅 八幡浜駅】"}
      />
      <SecHeadArrow />
      <div className="eat">
        <div className="tophead-map">
          <iframe
            className="fa"
            src="https://www.google.com/maps/d/u/0/embed?mid=1wvfB2MRt5wlUGqnu9svP5uoC9pDMsZV0"
            title="yawatahamaekimap"
          ></iframe>
          <a
            href="https://www.google.com/maps/d/u/0/embed?mid=1wvfB2MRt5wlUGqnu9svP5uoC9pDMsZV0"
            target="_brank"
            className="eat-maplink"
          >
            GoogleMapで見る ＞
          </a>
        </div>
        <YawatahamaekiCardList logo={logo_yawatahamaeki} title={"八幡浜駅"} />
      </div>
    </>
  );
};

export default Yawatahamaeki;
