import React from "react";
import nagayama from "../../../assets/img/shop/nagayama.jpg";
import toraji from "../../../assets/img/shop/toraji.jpg";
import heiwa from "../../../assets/img/shop/heiwa.jpg";
import gongen from "../../../assets/img/shop/gongen.jpg";
import { Card, GenreHeadTitle } from "../../../assets/components/index";

const YakinikuCardList = (props) => {
  return (
    <>
      <div className="cardlist">
        <GenreHeadTitle logo={props.logo} title={props.title} />
        <Card
          img={nagayama}
          title={"三代目長山精肉店"}
          sub={"個室完備！お一人様からお楽しみ頂ける個室焼肉屋"}
          link={"/Nagayama/#idnagayama"}
        />
        <Card
          img={toraji}
          title={"焼肉ホルモンとらじ"}
          sub={"名前の通り！おいしいホルモンが食べられるお店"}
          link={"/Toraji/#idtoraji"}
        />
        <Card
          img={heiwa}
          title={"平和伝炭火焼肉"}
          sub={"炭火で焼く焼肉屋さんここにあり！"}
          link={"/Heiwa/#idheiwa"}
        />
        <Card
          img={gongen}
          title={"ごんげん山"}
          sub={"タンがオススメのお肉屋さんに隣接するお店"}
          link={"/Gongen/#idgongen"}
        />
      </div>
    </>
  );
};

export default YakinikuCardList;
