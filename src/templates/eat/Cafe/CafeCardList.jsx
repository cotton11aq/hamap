import React from "react";
import buruman from "../../../assets/img/shop/buruman.jpg";
import sutera from "../../../assets/img/shop/sutera.jpg";
import chouchou from "../../../assets/img/shop/chouchou.jpg";
import winpi from "../../../assets/img/shop/winpi.jpg";
import yanagi from "../../../assets/img/shop/yanagi.jpg";
import monburan from "../../../assets/img/shop/monburan.jpg";
import deri from "../../../assets/img/shop/deri.jpg";
import reskitahama from "../../../assets/img/shop/reskitahama.jpg";
import bake from "../../../assets/img/shop/bake.jpg";
import amarufi from "../../../assets/img/shop/amarufi.jpg";
import mezon from "../../../assets/img/shop/mezon.jpg";
import gochisou from "../../../assets/img/shop/gochisou.jpg";
import roru from "../../../assets/img/shop/roru.jpg";
import goto from "../../../assets/img/shop/goto.jpg";
import puchi from "../../../assets/img/shop/puchi.jpg";
import { Card, GenreHeadTitle } from "../../../assets/components/index";

const CafeCardList = (props) => {
  return (
    <>
      <div className="cardlist">
        <GenreHeadTitle logo={props.logo} title={props.title} />
        <Card
          img={buruman}
          title={"珈琲専科 ぶるまん"}
          sub={"サイフォンで淹れる40年間変わらない味"}
          link={"/Buruman/#idburuman"}
        />
        <Card
          img={sutera}
          title={"カフェ・ド・ステラ"}
          sub={"数少ない、無添加手作り焼き菓子とコーヒーが楽しめるお店"}
          link={"/Sutera/#idsutera"}
        />
        <Card
          img={chouchou}
          title={"Café chouchou"}
          sub={"八幡浜のグルメが大集合"}
          link={"/Chouchou/#idchouchou"}
        />
        <Card
          img={winpi}
          title={"ウィンピー"}
          sub={"ヨーロッパ風のレトロな雰囲気が漂う老舗"}
          link={"/Winpi/#idwinpi"}
        />
        <Card
          img={yanagi}
          title={"YaなGi・カフェ"}
          sub={"半個室で過ごす、モダンなカフェ"}
          link={"/Yanagi/#idyanagi"}
        />
        <Card
          img={monburan}
          title={"モンブラン"}
          sub={"創業40年以上の老舗喫茶店"}
          link={"/Monburan/#idmonburan"}
        />
        <Card
          img={deri}
          title={"デリー"}
          sub={"準備中"}
          link={"/Deri/#idderi"}
        />
        <Card
          img={reskitahama}
          title={"レストラン北浜"}
          sub={"元日本料理人が送る、価格もお腹も満たす料理の数々♪"}
          link={"/Reskitahama/#idkitahama"}
        />
        <Card
          img={bake}
          title={"PARK SIDE BAKE"}
          sub={"港町のフランス洋菓子店「PARK SIDE BAKE"}
          link={"/Bake/#idbake"}
        />
        <Card
          img={amarufi}
          title={"リストランテ アマルフィ"}
          sub={"地元の食材にこだわったモダンイタリアン"}
          link={"/Amarufi/#idamarufi"}
        />
        <Card
          img={mezon}
          title={"パン・メゾン"}
          sub={"仕入れから提供までこだわっています！"}
          link={"/Mezon/#idmezon"}
        />
        <Card
          img={gochisou}
          title={"地鶏のごちそう。"}
          sub={"いいとこどりの地鶏をお弁当にしました♪"}
          link={"/Gochisou/#idgochisou"}
        />
        <Card
          img={roru}
          title={"Roll"}
          sub={
            "三代続く青果店のフルーツを使ったクレープとコーヒーのお店「Roll」"
          }
          link={"/Roru/#idroru"}
        />
        <Card
          img={goto}
          title={"菓子工房 後藤"}
          sub={"自家製練乳に注目！和菓子屋さんが作る本気のかき氷"}
          link={"/Goto/#idgoto"}
        />
        <Card
          img={puchi}
          title={"peti bonheur(ぷち・ぼぬーる)"}
          sub={"準備中"}
          link={"/Puchi/#idpuchi"}
        />
      </div>
    </>
  );
};

export default CafeCardList;
