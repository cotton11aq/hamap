import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Heiwa = () => {
  return (
    <>
      <div id="idtoraji"></div>
      <Header />
      <SideNav />
      <Shop
        title={"焼肉ホルモンとらじ"}
        titlesub={"名前の通り！おいしいホルモンが食べられるお店"}
        classpic={"shop-pic shop-toraji"}
        classicon={"shop-icon shop-yakiniku"}
        catch={"名前の通り！おいしいホルモンが食べられるお店"}
        genre01={"焼肉"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "八幡浜フェリー乗り場から少し東に進んだところにありますとらじ。こちらのお店、名前にあるようにおいしいホルモンがいただけます。店内は昔ながらの「焼肉屋」といった雰囲気です。どのメニューもボリューム満点＆リーズナブル（ホルモン:400円、センマイ：400円）な設定となっています。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.694176238454!2d132.4217500151995!3d33.45727338077202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ac2e323ddc32c87!2z54S86IKJ44Ob44Or44Oi44OzIOOBqOOCieOBmA!5e0!3m2!1sja!2sjp!4v1605870660765!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市桧谷１４５８−１"}
        tel={"0894-23-0195"}
        time={"-"}
        holiday={"-"}
        card={"-"}
        seat={"32席"}
        room={"無"}
        reserved={"-"}
        parking={"無（最寄りの駐車場：新川駐車場）"}
      />
    </>
  );
};

export default Heiwa;
