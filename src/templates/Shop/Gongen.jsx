import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Gongen = () => {
  return (
    <>
      <div id="idgongen"></div>
      <Header />
      <SideNav />
      <Shop
        title={"ごんげん山"}
        titlesub={"タンがオススメのお肉屋さんに隣接するお店"}
        classpic={"shop-pic shop-gongen"}
        classicon={"shop-icon shop-yakiniku"}
        catch={"タンがオススメのお肉屋さんに隣接するお店"}
        genre01={"焼肉"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "八幡浜の中心部にありますごんげん山。八幡浜市の老舗焼き肉専門店です。コリコリとした歯ごたえのタンはオススメで、甘めのタレが肉の旨味を引き出してくれます。アットホームなお店で落ち着いてお食事ができます。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.5792057754816!2d132.42067831519955!3d33.46026798077106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x57431463c3ab972!2z44GU44KT44GS44KT5bGx!5e0!3m2!1sja!2sjp!4v1605871272009!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市 1526−137"}
        tel={"0894-23-2989"}
        time={"-"}
        holiday={"-"}
        card={"不"}
        seat={"24席"}
        room={"無（仕切り有）"}
        reserved={"-"}
        parking={"無（最寄りの駐車場：パークワン四国銀行八幡浜支店 ）"}
      />
    </>
  );
};

export default Gongen;
