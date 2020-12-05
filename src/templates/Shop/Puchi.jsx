import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Puchi = () => {
  return (
    <>
      <div id="idpuchi"></div>
      <Header />
      <SideNav />
      <Shop
        title={"peti bonheur(ぷち・ぼぬーる)"}
        titlesub={"準備中"}
        classpic={"shop-pic shop-puchi"}
        classicon={"shop-icon shop-cafe"}
        catch={"準備中"}
        genre01={"クレープ・テイクアウト"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={"準備中"}
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.661831396968!2d132.43325131519956!3d33.45811588077165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x369329c2a1079239!2spetit%20bonheur!5e0!3m2!1sja!2sjp!4v1605917873608!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市江戸岡一丁目9-12"}
        tel={"0894-21-4146"}
        time={"平日：11：30～19：30 土日祝：11：00～19：00"}
        holiday={"月曜日"}
        card={"不"}
        seat={"カウンター5席"}
        room={"-"}
        reserved={"-"}
        parking={"無（最寄りの駐車場： 駅前駐車場 ）"}
      />
    </>
  );
};

export default Puchi;
