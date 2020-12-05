import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Bake = () => {
  return (
    <>
      <div id="idbake"></div>
      <Header />
      <SideNav />
      <Shop
        title={"PARK SIDE BAKE"}
        titlesub={"港町のフランス洋菓子店「PARK SIDE BAKE"}
        classpic={"shop-pic shop-bake"}
        classicon={"shop-icon shop-cafe"}
        catch={"港町のフランス洋菓子店「PARK SIDE BAKE"}
        genre01={"焼き菓子（テイクアウトのみ）"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "向灘のお魚牧場の近くにあります、フランス洋菓子のお店「PARK SIDE BAKE」。こちらのお店では、フィナンシェや、アイシングクッキー、スコーンなどがテイクアウトできます♪オススメはフランス・ポルドー地方の伝統菓子「カヌレ」です（写真右上）！外はサクッと、中身はもっちりした面白い食感が病みつきになること間違いなしです♡また、キャラクターバースデーケーキの注文も承っております♪1年に1回の大切な日に、ぜひご利用くださいませ！"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18500.101271586427!2d132.39631315752393!3d33.45897747099463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354584b14b349bc9%3A0xd3df63b98fd2a5c4!2sPARK%20SIDE%20BAKE!5e0!3m2!1sja!2sjp!4v1605915967799!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市向灘２６７３‐２"}
        tel={"090-2893-7704"}
        time={"【土・日】11:00〜17:00"}
        holiday={"平日"}
        card={"不"}
        seat={"-"}
        room={"-"}
        reserved={"-"}
        parking={"有"}
      />
    </>
  );
};

export default Bake;
