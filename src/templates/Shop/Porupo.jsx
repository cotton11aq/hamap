import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Porupo = () => {
  return (
    <>
      <div id="idporupo"></div>
      <Header />
      <SideNav />
      <Shop
        title={"POLPO（ポルポ）"}
        titlesub={"話題のラクレットチーズが楽しめるイタリアンレストラン！"}
        classpic={"shop-pic shop-porupo"}
        classicon={"shop-icon shop-izakaya"}
        catch={
          "クラフトビールに合うメニューがいっぱい！話題のラクレットチーズが楽しめるイタリアンレストラン！"
        }
        genre01={"居酒屋"}
        genre02={"イタリアンレストラン"}
        genre03={"shop-none"}
        text={
          "商店街の宮川菓子舗の目の前にありますイタリアンレストランPOLPO。2018年3月に大洲から移転された新しいお店です♪店内はイタリアンバルをイメージさせるお洒落な内装となっております。お料理は今話題のラクレットチーズを始め、宇和島産真鯛のポワレなど地元食材を使った料理が楽しめるメニュー構成となっております！また、お料理に合うクラフトビールも用意されており、お客さんを飽きさせることがありません。お得なランチ営業もされていますので、ぜひ一度お立ち寄りくださいませ♪"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.571753459139!2d132.42195991519955!3d33.46046208077104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2ea84f381a45ff0!2zUE9MUE_vvIjjg53jg6vjg53vvIk!5e0!3m2!1sja!2sjp!4v1605822102444!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市57新町281-1"}
        tel={"0894-23-2064"}
        time={"11:30～14:00 17:30～Last（Food L.O.22:00）"}
        holiday={"水曜日"}
        card={"不"}
        seat={"18席"}
        room={"無"}
        reserved={"可 事前予約"}
        parking={
          "無（最寄りの駐車場：ワンパークワン八幡浜第1・パークワン四国銀行八幡浜支店 ）"
        }
      />
    </>
  );
};

export default Porupo;
