import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Enya = () => {
  return (
    <>
      <div id="idenya"></div>
      <Header />
      <SideNav />
      <Shop
        title={"手造り居酒屋園家"}
        titlesub={"八幡浜の海鮮と豊富な種類のお酒が楽しめるお店！"}
        classpic={"shop-pic shop-enya"}
        classicon={"shop-icon shop-izakaya"}
        catch={"八幡浜の海鮮と豊富な種類のお酒が楽しめるお店！"}
        genre01={"海鮮居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "商店街の入り口近くにあります「手造り居酒屋園家」。こちらのお店では八幡浜の海鮮をはじめとしたメニューが豊富です♪どれもお酒に合うメニューばかりで、ついつい焼酎が進みます…そうそう、こちらのお店、焼酎が豊富です！ボトルのキープも可能ですよ♪"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.672201020374!2d132.42526401519964!3d33.457845780771876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdddd3059fc90af6d!2z5bGF6YWS5bGL5ZyS5a62!5e0!3m2!1sja!2sjp!4v1605820720889!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市矢野町４ 1171"}
        tel={"0894-24-3278"}
        time={"17:00～23:00"}
        holiday={"日曜日"}
        card={"不"}
        seat={"10席"}
        room={"無"}
        reserved={"※可（曜日次第 要問合せ）"}
        parking={"無（最寄り駐車場：ひめぎん・新川）"}
      />
    </>
  );
};

export default Enya;
