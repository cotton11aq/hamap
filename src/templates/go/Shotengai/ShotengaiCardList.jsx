import React from "react";
import { Card, GenreHeadTitle } from "../../../assets/components/index";
import yanagi from "../../../assets/img/shop/yanagi.jpg";
import monburan from "../../../assets/img/shop/monburan.jpg";
import deri from "../../../assets/img/shop/deri.jpg";
import reskitahama from "../../../assets/img/shop/reskitahama.jpg";
import amarufi from "../../../assets/img/shop/amarufi.jpg";
import mezon from "../../../assets/img/shop/mezon.jpg";
import gochisou from "../../../assets/img/shop/gochisou.jpg";
import goto from "../../../assets/img/shop/goto.jpg";
import iguru from "../../../assets/img/shop/iguru.jpg";
import maruyama from "../../../assets/img/shop/maruyama.jpg";
import aikatei from "../../../assets/img/shop/aikatei.jpg";
import kinomi from "../../../assets/img/shop/kinomi.jpg";
import kuore from "../../../assets/img/shop/kuore.jpg";
import duuduu from "../../../assets/img/shop/dyuudyuu.jpg";
import ito from "../../../assets/img/shop/ito.jpg";
import praza from "../../../assets/img/shop/praza.jpg";
import atago from "../../../assets/img/shop/atago.jpg";
import minato from "../../../assets/img/shop/minato.jpg";
import ajiraku from "../../../assets/img/shop/ajiraku.jpg";
import yakijozu from "../../../assets/img/shop/yakijozu.jpg";
import rondon from "../../../assets/img/shop/rondon.jpg";
import seike from "../../../assets/img/shop/seike.jpg";
import ikedaya from "../../../assets/img/shop/ikedaya.jpg";
import ayacho from "../../../assets/img/shop/ayacho.jpg";
import kaisho from "../../../assets/img/shop/kaisho.jpg";
import uribo from "../../../assets/img/shop/uribo.jpg";
import kimi from "../../../assets/img/shop/kimi.jpg";
import maru from "../../../assets/img/shop/maru.jpg";
import yumesuke from "../../../assets/img/shop/yumesuke.jpg";
import tsukiten from "../../../assets/img/shop/tsukiten.jpg";
import kuimonya from "../../../assets/img/shop/kuimonya.jpg";
import meoto from "../../../assets/img/shop/meoto.jpg";
import kofu from "../../../assets/img/shop/kofu.jpg";
import ichidai from "../../../assets/img/shop/ichidai.jpg";
import enya from "../../../assets/img/shop/enya.jpg";
import ryokichi from "../../../assets/img/shop/ryokichi.jpg";
import bia from "../../../assets/img/shop/bia.jpg";
import ku from "../../../assets/img/shop/ku.jpg";
import porupo from "../../../assets/img/shop/porupo.jpg";
import yururi from "../../../assets/img/shop/yururi.jpg";
import yochatei from "../../../assets/img/shop/yochatei.jpg";
import syokudukuri from "../../../assets/img/shop/syokudukuri.jpg";
import robata from "../../../assets/img/shop/robata.jpg";
import ueda from "../../../assets/img/shop/ueda.jpg";
import sushikou from "../../../assets/img/shop/sushikou.jpg";
import kitahama from "../../../assets/img/shop/kitahama.jpg";
import shigaru from "../../../assets/img/shop/shigaru.jpg";
import oshimaya from "../../../assets/img/shop/oshimaya.jpg";
import kokeke from "../../../assets/img/shop/kokeke.jpg";
import takamatsuya from "../../../assets/img/shop/takamatsuya.jpg";
import sushiishin from "../../../assets/img/shop/sushiishin.jpg";
import tarugen from "../../../assets/img/shop/tarugen.jpg";
import kasuga from "../../../assets/img/shop/kasuga.jpg";
import kairi from "../../../assets/img/shop/kairi.jpg";
import atagoginza from "../../../assets/img/shop/atagoginza.jpg";
import miyachan from "../../../assets/img/shop/miyachan.jpg";
import dosanko from "../../../assets/img/shop/dosanko.jpg";
import toraji from "../../../assets/img/shop/toraji.jpg";
import heiwa from "../../../assets/img/shop/heiwa.jpg";
import gongen from "../../../assets/img/shop/gongen.jpg";

const ShotengaiCardList = (props) => {
  return (
    <>
      <div className="cardlist">
        <GenreHeadTitle logo={props.logo} title={props.title} />
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
          img={goto}
          title={"菓子工房 後藤"}
          sub={"自家製練乳に注目！和菓子屋さんが作る本気のかき氷"}
          link={"/Goto/#idgoto"}
        />
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
        <Card
          img={miyachan}
          title={"たこ焼 みやちゃん"}
          sub={"たこ焼き・かき氷、ふらっと立ち寄れるたこ焼き屋さん"}
          link={"/Miyachan/#idmiyachan"}
        />
        <Card
          img={dosanko}
          title={"どさん子ラーメン"}
          sub={"独自の進化を遂げたオリジナルメニューを堪能"}
          link={"/Dosanko/#iddosanko"}
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

export default ShotengaiCardList;
