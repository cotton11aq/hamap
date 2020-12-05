import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Gochisou = () => {
  return (
    <>
      <div id="idgochisou"></div>
      <Header />
      <SideNav />
      <Shop
        title={"地鶏のごちそう。"}
        titlesub={"いいとこどりの地鶏をお弁当にしました♪"}
        classpic={"shop-pic shop-gochisou"}
        classicon={"shop-icon shop-cafe"}
        catch={"いいとこどりの地鶏をお弁当にしました♪"}
        genre01={"弁当"}
        genre02={"鳥料理"}
        genre03={"shop-none"}
        text={
          "媛っこ地鶏は全国でも珍しい四元交配の「いいとこどりの地鶏」です。気候風土に恵まれた八幡浜八代の山頂にあるいなほ農園でのびのびそだちました。素晴らしい環境で育てた媛っこ地鶏は、お肉の旨味としっかりとした歯ごたえが絶品です！「地鶏のごちそう。」ではフレッシュな朝挽きで、他では味わえない絶品の媛っこ地鶏をお求め頂けます。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.5503907084767!2d132.41890291519957!3d33.46101848077096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca66a34a875ae2f2!2z5Zyw6baP44Gu44GU44Gh44Gd44GG44CC!5e0!3m2!1sja!2sjp!4v1605917258024!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市北浜1590-18"}
        tel={"0894-21-1777"}
        time={"10:00～15:00"}
        holiday={"日曜日"}
        card={"可(VISA,JCB,Mastercard,etc...)"}
        seat={"6席"}
        room={"無"}
        reserved={"-"}
        parking={"3台"}
      />
    </>
  );
};

export default Gochisou;
