import React from "react";
import {
  SecHeadText,
  Contents,
  Genre,
  Header,
  GenreHeadText,
  SideNav,
  Insta,
} from "../../assets/components/index";
import sec_pic from "../../assets/img/sechead/top_picture.png";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import { ImageSwiper } from "../../assets/components/Products";

const Top = (props) => {
  return (
    <>
      <div className="top">
        <div id="idtop"></div>
        <Header />
        <div className="toppic">
          <div className="toppic-top"></div>
        </div>
        <Genre />
      </div>
      <SideNav />
      <Contents />
      <ImageSwiper />
      <div className="swiper-height">
        <div className="swiper-pc"></div>
      </div>
      <SecHeadText
        title={"Hamap"}
        sub01={"日本の端まで、"}
        sub02={'やわたはまの"美味しい！"を'}
        sub03={"写真とともに紹介"}
        text01={
          "西日本有数の水産都市としても知られ、全国屈指のかんきつ産地でもある八幡浜のグルメを写真とともにご紹介します！"
        }
        text02={
          "ソウルフードのちゃんぽんや、地元の食材を使った料理が並ぶ海鮮、居酒屋など7つのジャンルからお店をお探しいただけます。"
        }
        text03={
          "さらに、八幡浜のグルメが集まる「商店街」「八幡浜駅周辺」、八幡浜港のすぐそばにある道の駅「みなっと」といったエリア別でもご紹介しています。"
        }
        pic={sec_pic}
        className={"sechead-none"}
      />
      <div className="sechead-bottom" id="idinsta"></div>
      <GenreHeadText
        id={"idinsta-sp"}
        className={"lets lets-gray"}
        title={"Instagram PICK UP !"}
        sub={"インスタグラムにて、"}
        sub02={"八幡浜の美味しい情報をお伝えしています。"}
      />
      <Insta />
    </>
  );
};

export default Top;
