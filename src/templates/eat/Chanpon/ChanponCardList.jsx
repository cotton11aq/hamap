import React from "react";
import iguru from "../../../assets/img/shop/iguru.jpg";
import maruyama from "../../../assets/img/shop/maruyama.jpg";
import aikatei from "../../../assets/img/shop/aikatei.jpg";
import kinomi from "../../../assets/img/shop/kinomi.jpg";
import kuore from "../../../assets/img/shop/kuore.jpg";
import sanwa from "../../../assets/img/shop/sanwa.jpg";
import duuduu from "../../../assets/img/shop/dyuudyuu.jpg";
import ito from "../../../assets/img/shop/ito.jpg";
import praza from "../../../assets/img/shop/praza.jpg";
import atago from "../../../assets/img/shop/atago.jpg";
import fuji from "../../../assets/img/shop/fuji.jpg";
import marin from "../../../assets/img/shop/marin.jpg";
import mitsuba from "../../../assets/img/shop/mitsuba.jpg";
import minato from "../../../assets/img/shop/minato.jpg";
import ajiraku from "../../../assets/img/shop/ajiraku.jpg";
import yakijozu from "../../../assets/img/shop/yakijozu.jpg";
import rondon from "../../../assets/img/shop/rondon.jpg";
import seike from "../../../assets/img/shop/seike.jpg";
import { Card, GenreHeadTitle } from "../../../assets/components/index";

const ChanponCardList = (props) => {
  return (
    <>
      <div className="cardlist">
        <GenreHeadTitle logo={props.logo} title={props.title} />
        <Card
          img={iguru}
          title={"ちゃんぽん亭 イーグル"}
          sub={"先代から引き継ぐ伝統の味！ コクのあるスープはまさに絶品"}
          link={"/Iguru/#idiguru"}
        />
        <Card
          img={maruyama}
          title={"丸山ちゃんぽん"}
          sub={"拓味？拓海？親子で経営される海鮮居酒屋"}
          link={"/Maruyama/#idmaruyama"}
        />
        <Card
          img={aikatei}
          title={"レストラン 愛花亭"}
          sub={"バリエーション豊かなちゃんぽんを食べられるお店"}
          link={"/Aikatei/#idaikatei"}
        />
        <Card
          img={kinomi}
          title={"田舎料理 木の実"}
          sub={"次の日に響かない！ノンオイルちゃんぽん"}
          link={"/Kinomi/#idkinomi"}
        />
        <Card
          img={kuore}
          title={"クオーレ"}
          sub={"新発見！トマト使用の赤いちゃんぽん！"}
          link={"/Kuore/#idkuore"}
        />
        <Card
          img={sanwa}
          title={"三和ビジネスホテル"}
          sub={"創業時から愛される味！"}
          link={"/Sanwa/#idsanwa"}
        />
        <Card
          img={duuduu}
          title={"レストランぢゅうぢゅう"}
          sub={"先代から引き継ぐ伝統の味！ コクのあるスープはまさに絶品"}
          link={"/Dyuudyuu/#iddyuudyuu"}
        />
        <Card
          img={ito}
          title={"八幡浜センチュリーホテルイトー"}
          sub={"最上階から宇和海を眺めながら味わうちゃんぽん"}
          link={"/Ito/#idito"}
        />
        <Card
          img={praza}
          title={"ハーバープラザホテル"}
          sub={"1００人単位の宴会も可能。大人数でお探しならココ"}
          link={"/Praza/#idpraza"}
        />
        <Card
          img={atago}
          title={"浜味館 あたご"}
          sub={"創業75年の味!特別な日に行きたいお店"}
          link={"/Atago/#idatago"}
        />
        <Card
          img={fuji}
          title={"フジ観光"}
          sub={"新鮮な海鮮たっぷりの1ランク上のちゃんぽん"}
          link={"/Fuji/#idfuji"}
        />
        <Card
          img={marin}
          title={"レストラン マリン"}
          sub={"宇和海を眺めながら味わう一品"}
          link={"/Marin/#idmarin"}
        />
        <Card
          img={mitsuba}
          title={"みつば食堂"}
          sub={"手作りのやさしい味わいとアットホームな雰囲気が魅力"}
          link={"/Mitsuba/#idmitsuba"}
        />
        <Card
          img={minato}
          title={"みなと"}
          sub={"八幡浜で〆といえば「みなと」"}
          link={"/Minato/#idminato"}
        />
        <Card
          img={ajiraku}
          title={"味楽食堂"}
          sub={"とろみのあるスープが絶品！他では食べられないあんかけちゃんぽん"}
          link={"/Ajiraku/#idajiraku"}
        />
        <Card
          img={yakijozu}
          title={"焼き上手"}
          sub={"香ばしさがそそる、新感覚のちゃんぽん"}
          link={"/Yakijozu/#idyakijozu"}
        />
        <Card
          img={rondon}
          title={"ロンドン"}
          sub={"創業67年老舗の一品。"}
          link={"/Rondon/#idrondon"}
        />
        <Card
          img={seike}
          title={"清家食堂"}
          sub={"創業明治３０年の老舗食堂"}
          link={"/Seike/#idseike"}
        />
      </div>
    </>
  );
};

export default ChanponCardList;
