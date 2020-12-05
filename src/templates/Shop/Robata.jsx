import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Robata = () => {
  return (
    <>
      <div id="idrobata"></div>
      <Header />
      <SideNav />
      <Shop
        title={"炉ばた酒家 拓海"}
        titlesub={"ミシュラン2018掲載店舗！海鮮居酒屋拓海！"}
        classpic={"shop-pic shop-robata"}
        classicon={"shop-icon shop-izakaya"}
        catch={"ミシュラン2018掲載店舗！海鮮居酒屋拓海！"}
        genre01={"海鮮居酒屋"}
        genre02={"割烹"}
        genre03={"shop-none"}
        text={
          "商店街のビル二階にあります炉ばた酒屋 拓海。私ごとですが拓味と拓海をよく間違えます...そんな拓海、親子で経営されているため、父の経営する拓味に負けないくらい海鮮が美味しいです。こちらもドリンクの種類が多く、八幡浜を感じられるお店となっています。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.622283331504!2d132.42211831519967!3d33.459145980771574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd97d834612c56fd1!2z54KJ44Gw44Gf6YWS5a62IOaLk-a1tw!5e0!3m2!1sja!2sjp!4v1605822814019!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市1423 ニューナカジマビル 2F"}
        tel={"0894-24-5982"}
        time={"17:30～翌1:00(L.O 24:00) 【日・祝】17:30〜23:30(L.O22:30)"}
        holiday={"火曜日"}
        card={"不"}
        seat={"38席（座敷30席、カウンター8席）"}
        room={"有（スクリーンで仕切る半個室）"}
        reserved={"可（20人～50人）"}
        parking={"無（最寄りの駐車場：中央駐車場）"}
      />
    </>
  );
};

export default Robata;
