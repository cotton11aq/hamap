import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Atago = () => {
  return (
    <>
      <div id="idatago"></div>
      <Header />
      <SideNav />
      <Shop
        title={"浜味館 あたご"}
        titlesub={"創業75年の味!特別な日に行きたいお店"}
        classpic={"shop-pic shop-atago"}
        classicon={"shop-icon shop-chanpon"}
        catch={"迫力満点。カブトエビがアクセントの豪快ちゃんぽん"}
        genre01={"日本料理（寿司や和定食など海鮮料理）"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "創業75年の八幡浜のお客様によく利用していただいているお食事処です。昼は平日の日替わりランチや鯛めし、鯵（あじ）のたたき寿司などが好評です。個室は予約制ですが、お祝いの席として、宮参り、七五三などの法事や葬儀の精進落とし、そして同窓会など宴会での利用を頂いております。カブトエビから取った和風スープと野菜のうまみたっぷりの自家製じゃこ天など、手の込んだ海鮮ちゃんぽんがオススメ。日替わりランチや海鮮ランチもあるのが嬉しいところ。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6074366923135!2d132.42155061519952!3d33.459532680771346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x82c9956ef3bad495!2z5rWc5ZGz6aSo44GC44Gf44GU6Ii55aC06YCa5bqX!5e0!3m2!1sja!2sjp!4v1605612572817!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市船場通３７９−１"}
        tel={"0894-22-3322"}
        time={"11：00〜21：00（ラストオーダー20：30）"}
        holiday={"不定休（毎月1回程度・12月31日・1月1日）"}
        card={"不可"}
        seat={"カウンター8席、テーブル22席"}
        room={"有（4人～80人）"}
        reserved={"可（2階、3階の個室のみ）"}
        parking={"有"}
      />
    </>
  );
};

export default Atago;
