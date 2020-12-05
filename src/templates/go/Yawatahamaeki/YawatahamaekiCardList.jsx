import React from "react";
import { Card, GenreHeadTitle } from "../../../assets/components/index";
import buruman from "../../../assets/img/shop/buruman.jpg";
import sutera from "../../../assets/img/shop/sutera.jpg";
import winpi from "../../../assets/img/shop/winpi.jpg";
import puchi from "../../../assets/img/shop/puchi.jpg";
import saisu from "../../../assets/img/shop/saisu.jpg";
import nagayama from "../../../assets/img/shop/nagayama.jpg";

const YawatahamaekiCardList = (props) => {
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
          img={winpi}
          title={"ウィンピー"}
          sub={"ヨーロッパ風のレトロな雰囲気が漂う老舗"}
          link={"/Winpi/#idwinpi"}
        />
        <Card
          img={puchi}
          title={"peti bonheur(ぷち・ぼぬーる)"}
          sub={"準備中"}
          link={"/Puchi/#idpuchi"}
        />
        <Card
          img={saisu}
          title={"済州島"}
          sub={"八幡浜駅、ニューホテルトヨからアクセス抜群"}
          link={"/Saisu/#idsaisu"}
        />
        <Card
          img={nagayama}
          title={"三代目長山精肉店"}
          sub={"個室完備！お一人様からお楽しみ頂ける個室焼肉屋"}
          link={"/Nagayama/#idnagayama"}
        />
      </div>
    </>
  );
};

export default YawatahamaekiCardList;
