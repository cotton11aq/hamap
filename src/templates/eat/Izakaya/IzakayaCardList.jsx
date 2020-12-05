import React from "react";
import ikedaya from "../../../assets/img/shop/ikedaya.jpg";
import kinomi from "../../../assets/img/shop/kinomi.jpg";
import ino from "../../../assets/img/shop/ino.jpg";
import ayacho from "../../../assets/img/shop/ayacho.jpg";
import kaisho from "../../../assets/img/shop/kaisho.jpg";
import uribo from "../../../assets/img/shop/uribo.jpg";
import kimi from "../../../assets/img/shop/kimi.jpg";
import maru from "../../../assets/img/shop/maru.jpg";
import yumesuke from "../../../assets/img/shop/yumesuke.jpg";
import tsukiten from "../../../assets/img/shop/tsukiten.jpg";
import kuimonya from "../../../assets/img/shop/kuimonya.jpg";
import kuore from "../../../assets/img/shop/kuore.jpg";
import meoto from "../../../assets/img/shop/meoto.jpg";
import kofu from "../../../assets/img/shop/kofu.jpg";
import saisu from "../../../assets/img/shop/saisu.jpg";
import ichidai from "../../../assets/img/shop/ichidai.jpg";
import enya from "../../../assets/img/shop/enya.jpg";
import ryokichi from "../../../assets/img/shop/ryokichi.jpg";
import praza from "../../../assets/img/shop/praza.jpg";
import bia from "../../../assets/img/shop/bia.jpg";
import ku from "../../../assets/img/shop/ku.jpg";
import porupo from "../../../assets/img/shop/porupo.jpg";
import minato from "../../../assets/img/shop/minato.jpg";
import yururi from "../../../assets/img/shop/yururi.jpg";
import yochatei from "../../../assets/img/shop/yochatei.jpg";
import syokudukuri from "../../../assets/img/shop/syokudukuri.jpg";
import robata from "../../../assets/img/shop/robata.jpg";
import { Card, GenreHeadTitle } from "../../../assets/components/index";

const IzakayaCardList = (props) => {
  return (
    <>
      <div className="cardlist">
        <GenreHeadTitle logo={props.logo} title={props.title} />
        <Card
          img={ikedaya}
          title={"池田屋"}
          sub={"焼肉＆鍋、お好きなスタイルでお肉を堪能"}
          link={"/Ikedaya/#idikedaya"}
        />
        <Card
          img={kinomi}
          title={"田舎料理 木の実"}
          sub={"次の日に響かない！ノンオイルちゃんぽん"}
          link={"/Kinomi/#idkinomi"}
        />
        <Card
          img={ino}
          title={"いの"}
          sub={"美味しい鰻に舌鼓。"}
          link={"/Ino/#idino"}
        />
        <Card
          img={ayacho}
          title={"炭火焼鳥 彩鳥"}
          sub={"デートにも利用いただける、モダンな焼き鳥屋さん"}
          link={"/Ayacho/#idayacho"}
        />
        <Card
          img={kaisho}
          title={"海将"}
          sub={"港町ならではの海鮮居酒屋"}
          link={"/Kaisho/#idkaisho"}
        />
        <Card
          img={uribo}
          title={"うり坊"}
          sub={"準備中"}
          link={"/Uribo/#iduribo"}
        />
        <Card
          img={kimi}
          title={"お好み焼き・きみ"}
          sub={"みなと湯の後はお好み焼きで決定"}
          link={"/Kimi/#idkimi"}
        />
        <Card
          img={maru}
          title={"お母んのまかない まる"}
          sub={"どこか懐かしい味に舌鼓を。"}
          link={"/Maru/#idmaru"}
        />
        <Card
          img={yumesuke}
          title={"隠れ町 ゆめ助"}
          sub={"ひっそりとたたずむ隠れ家"}
          link={"/Yumesuke/#idyumesuke"}
        />
        <Card
          img={tsukiten}
          title={"月天"}
          sub={"創意工夫から生み出される幾多のメニュー"}
          link={"/Tsukiten/#idtsukiten"}
        />
        <Card
          img={kuimonya}
          title={"くいもんや３０５"}
          sub={"予約必須のお店！くいもんやでさわごー（305）"}
          link={"/Kuimonya/#idkuimonya"}
        />
        <Card
          img={kuore}
          title={"クオーレ"}
          sub={"新発見！トマト使用の赤いちゃんぽん！"}
          link={"/Kuore/#idkuore"}
        />
        <Card
          img={meoto}
          title={"小鍋料理 めおと"}
          sub={"ゆっくりした時間を過ごせるアットホームなお店"}
          link={"/Meoto/#idmeoto"}
        />
        <Card
          img={kofu}
          title={"古風酒菜工房"}
          sub={"八幡浜で唯一蕎麦が食べられるお店"}
          link={"/Kofu/#idkofu"}
        />
        <Card
          img={saisu}
          title={"済州島"}
          sub={"八幡浜駅、ニューホテルトヨからアクセス抜群"}
          link={"/Saisu/#idsaisu"}
        />
        <Card
          img={ichidai}
          title={"笑話酒場 いちだい"}
          sub={"深夜3時まで元気に営業中‼"}
          link={"/Ichidai/#idichidai"}
        />
        <Card
          img={syokudukuri}
          title={"食造り 拓味"}
          sub={"拓味？拓海？親子で経営される海鮮居酒屋"}
          link={"/Syokudukuri/#idsyokudukuri"}
        />
        <Card
          img={enya}
          title={"手造り居酒屋園家"}
          sub={"八幡浜の海鮮と豊富な種類のお酒が楽しめるお店！"}
          link={"/Enya/#idenya"}
        />
        <Card
          img={ryokichi}
          title={"酉屋りょう吉"}
          sub={"酉はもちろん、豊富なドリンクメニューもおすすめ"}
          link={"/Ryokichi/#idryokichi"}
        />
        <Card
          img={praza}
          title={"ハーバープラザホテル"}
          sub={"1００人単位の宴会も可能。大人数でお探しならココ"}
          link={"/Praza/#idpraza"}
        />
        <Card
          img={bia}
          title={"ビア・レスト アイ・ウォール"}
          sub={"八幡浜で唯一のビアレスト"}
          link={"/Bia/#idbia"}
        />
        <Card
          img={ku}
          title={"美食遊膳・空"}
          sub={"地元の魚を使用したお造りがオススメ！"}
          link={"/Ku/#idku"}
        />
        <Card
          img={porupo}
          title={"POLPO（ポルポ）"}
          sub={"クラフトビールに合うメニューがいっぱい"}
          link={"/Porupo/#idporupo"}
        />
        <Card
          img={minato}
          title={"みなと"}
          sub={"八幡浜で〆といえば「みなと」"}
          link={"/Minato/#idminato"}
        />
        <Card
          img={yururi}
          title={"ゆるり"}
          sub={"全室、完全個室で「ゆる～り」と"}
          link={"/Yururi/#idyururi"}
        />
        <Card
          img={yochatei}
          title={"よっちゃっ亭"}
          sub={"フレンチ出身のオーナーが作る料理に舌鼓"}
          link={"/Yochatei/#idyochatei"}
        />
        <Card
          img={robata}
          title={"炉ばた酒家 拓海"}
          sub={"ミシュラン2018掲載店舗！海鮮居酒屋拓海！"}
          link={"/Robata/#idrobata"}
        />
      </div>
    </>
  );
};

export default IzakayaCardList;
