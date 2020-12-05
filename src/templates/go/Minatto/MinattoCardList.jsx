import React from "react";
import { Card, GenreHeadTitle } from "../../../assets/components/index";
import chouchou from "../../../assets/img/shop/chouchou.jpg";
import roru from "../../../assets/img/shop/roru.jpg";
import sanwa from "../../../assets/img/shop/sanwa.jpg";
import fuji from "../../../assets/img/shop/fuji.jpg";
import marin from "../../../assets/img/shop/marin.jpg";
import umisachimaru from "../../../assets/img/shop/umisachimaru.jpg";
import doya from "../../../assets/img/shop/doya.jpg";

const ShotengaiCardList = (props) => {
  return (
    <>
      <div className="cardlist">
        <GenreHeadTitle logo={props.logo} title={props.title} />

        <Card
          img={chouchou}
          title={"Café chouchou"}
          sub={"八幡浜のグルメが大集合"}
          link={"/Chouchou/#idchouchou"}
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
          img={sanwa}
          title={"三和ビジネスホテル"}
          sub={"創業時から愛される味！"}
          link={"/Sanwa/#idsanwa"}
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
          img={umisachimaru}
          title={"綱元の台所 海幸丸"}
          sub={"仕入れから提供までこだわっています！"}
          link={"/Umisachimaru/#idumisachimaru"}
        />
        <Card
          img={doya}
          title={"どーや食堂"}
          sub={
            "その日の仕入れでネタが変化!!どーや市場で水揚げされたお魚を使った海鮮丼"
          }
          link={"/Doya/#iddoya"}
        />
      </div>
    </>
  );
};

export default ShotengaiCardList;
