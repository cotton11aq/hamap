import React from "react";
import ueda from "../../../assets/img/shop/ueda.jpg";
import sushikou from "../../../assets/img/shop/sushikou.jpg";
import umisachimaru from "../../../assets/img/shop/umisachimaru.jpg";
import kitahama from "../../../assets/img/shop/kitahama.jpg";
import shigaru from "../../../assets/img/shop/shigaru.jpg";
import doya from "../../../assets/img/shop/doya.jpg";
import atago from "../../../assets/img/shop/atago.jpg";
import oshimaya from "../../../assets/img/shop/oshimaya.jpg";
import kokeke from "../../../assets/img/shop/kokeke.jpg";
import takamatsuya from "../../../assets/img/shop/takamatsuya.jpg";
import sushiishin from "../../../assets/img/shop/sushiishin.jpg";
import tarugen from "../../../assets/img/shop/tarugen.jpg";
import kasuga from "../../../assets/img/shop/kasuga.jpg";
import kairi from "../../../assets/img/shop/kairi.jpg";
import atagoginza from "../../../assets/img/shop/atagoginza.jpg";
import { Card, GenreHeadTitle } from "../../../assets/components/index";

const KaisenCardList = (props) => {
  return (
    <>
      <div className="cardlist">
        <GenreHeadTitle logo={props.logo} title={props.title} />
        <Card
          img={ueda}
          title={"味一番うえだ"}
          sub={
            "産地直送だからできる価格！ 贅沢な「ふぐコース」をお手頃価格で！"
          }
          link={"/Ueda/#idueda"}
        />
        <Card
          img={sushikou}
          title={"すし光"}
          sub={"豊後水道の地魚を旬で仕入れています！"}
          link={"/sushikou/#idsushikou"}
        />
        <Card
          img={umisachimaru}
          title={"綱元の台所 海幸丸"}
          sub={"仕入れから提供までこだわっています！"}
          link={"/Umisachimaru/#idumisachimaru"}
        />
        <Card
          img={kitahama}
          title={"北浜大島屋"}
          sub={"35年間変わらない品質！一級品のみを使用したコース料理は絶品"}
          link={"/Kitahama/#idkitahama"}
        />
        <Card
          img={shigaru}
          title={"シーガル"}
          sub={"みなと町を眼下に、豪華海鮮丼はいかがですか？"}
          link={"/Shigaru/#idshigaru"}
        />
        <Card
          img={doya}
          title={"どーや食堂"}
          sub={
            "その日の仕入れでネタが変化!!どーや市場で水揚げされたお魚を使った海鮮丼"
          }
          link={"/Doya/#iddoya"}
        />
        <Card
          img={atago}
          title={"浜味館 あたご"}
          sub={"創業75年の味!特別な日に行きたいお店"}
          link={"/Atago/#idatago"}
        />
        <Card
          img={oshimaya}
          title={"大島屋"}
          sub={"生け簀で泳ぐフグ・アジの活き造りは絶品"}
          link={"/Oshimaya/#idoshimaya"}
        />
        <Card
          img={kokeke}
          title={"こけけ"}
          sub={"魚肴まかない処"}
          link={"/Kokeke/#idkokeke"}
        />
        <Card
          img={takamatsuya}
          title={"高松屋"}
          sub={"モダンな雰囲気のお寿司屋＆海鮮居酒屋さん"}
          link={"/Takamatsuya/#idtakamatsuya"}
        />
        <Card
          img={sushiishin}
          title={"鮨一心"}
          sub={"準備中"}
          link={"/Sushiishin/#idsushiishin"}
        />
        <Card
          img={tarugen}
          title={"たる源"}
          sub={"準備中"}
          link={"/Tarugen/#idtarugen"}
        />
        <Card
          img={kasuga}
          title={"春日料亭"}
          sub={"海・山・川の「幸」が味わえる料亭"}
          link={"/Kasuga/#idkasuga"}
        />
        <Card
          img={kairi}
          title={"海里"}
          sub={"旬の魚を仕入れ、四季を感じるお魚料理が自慢"}
          link={"/Kairi/#idkairi"}
        />
        <Card
          img={atagoginza}
          title={"あたご 銀座店"}
          sub={"創業67年老舗の一品。"}
          link={"/Atagoginza/#idatagoginza"}
        />
      </div>
    </>
  );
};

export default KaisenCardList;
