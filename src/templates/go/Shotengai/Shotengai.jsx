import React from "react";
import {
  GenreHeadTitle,
  SecHeadText,
  Header,
  SecHeadArrow,
} from "../../../assets/components/index";
import { ShotengaiCardList } from "../../index";
import map_shotengai from "../../../assets/img/map/area_shotengai.png";
import sec_shotengai from "../../../assets/img/sechead/shotengai_picture.png";
import logo_shotengai from "../../../assets/img/icon/black/black_shotengai.png";

const Shotengai = () => {
  return (
    <>
      <div id="idshotengai"></div>
      <Header />
      <GenreHeadTitle logo={logo_shotengai} title={"商店街"} />
      <div className="toppic">
        <div className="toppic-shotengai"></div>
      </div>
      <SecHeadText
        title={"商店街"}
        sub01={"八幡浜のグルメが集まる"}
        sub02={"ほそ長〜いアーケードの"}
        sub03={"黒い商店街"}
        text01={
          "町の中心部にある「新町商店街」は１丁目から５丁目まで約800mほどの長～い商店街。若い商店主メンバーが中心となり、様々なイベントを実施しています。"
        }
        text02={
          "この商店街は「黒い商店街」とも呼ばれ、「黒いイタリアン」「黒だしちゃんぽん」「いか墨かまぼこ」など食べ物が真っ黒！さらに、ポストや自動販売機も真っ黒！色で町おこしをしている商店街で有名です。"
        }
        map={map_shotengai}
        pic={sec_shotengai}
        href={
          "https://getnews.jp/archives/2085883?fbclid=IwAR2rGx--kPl1z5M6QwJKWm0kdO5cj1QnpTtfWdXpVr1yV0X8EYK8cNBn98k/gate"
        }
        linkname={
          "出典：ガジェット通信【あちこちが真っ黒！不気味で面白い体験ができる黒い商店街が話題【愛媛】】"
        }
      />
      <SecHeadArrow />
      <div className="eat">
        <div className="tophead-map">
          <iframe
            className="fa"
            src="https://www.google.com/maps/d/u/0/embed?mid=1gpFOi6LlyKBIbe2JDPRi43idl9je2DPo"
            title="shotengaimap"
          ></iframe>
          <a
            href="https://www.google.com/maps/d/u/0/embed?mid=1gpFOi6LlyKBIbe2JDPRi43idl9je2DPo"
            target="_brank"
            className="eat-maplink"
          >
            GoogleMapで見る ＞
          </a>
        </div>
        <ShotengaiCardList logo={logo_shotengai} title={"商店街"} />
      </div>
    </>
  );
};

export default Shotengai;
