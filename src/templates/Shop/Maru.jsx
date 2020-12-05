import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Maru = () => {
  return (
    <>
      <div id="idmaru"></div>
      <Header />
      <SideNav />
      <Shop
        title={"お母んのまかない まる"}
        titlesub={"どこか懐かしい味に舌鼓を。"}
        classpic={"shop-pic shop-maru"}
        classicon={"shop-icon shop-izakaya"}
        catch={"どこか懐かしい味に舌鼓を。"}
        genre01={"居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "昔食べたどこか懐かしい味のお店「お母んのまかない まる」。女将さんは気さくで明るく、元気を頂けます！お料理も400円前後と、お財布にも優しいのも嬉しいところ。ゆっくりとした時間を過ごしたいお客様にオススメのお店です。また、2階は10人まで利用可能な小宴会場となっております。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.539079534752!2d132.42104511519958!3d33.46131308077079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x55a2b1d51aac1bc5!2z44GK5q-N44KT44Gu44G-44GL44Gq44GEIOOBvuOCiw!5e0!3m2!1sja!2sjp!4v1605818580225!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市戒町435-50"}
        tel={"0894-22-1212"}
        time={"17:30～23:00（ラストオーダー22:30）"}
        holiday={"日曜日"}
        card={"不"}
        seat={"21席（1階:カウンター7席・4人掛けテーブル1つ、2階:小宴会場10席）"}
        room={"有（2階が10人まで利用可能な個室となっております）"}
        reserved={"可"}
        parking={"有（1台）（最寄りの駐車場：商工会議所駐車場 ）"}
      />
    </>
  );
};

export default Maru;
