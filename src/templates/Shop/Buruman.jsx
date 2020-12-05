import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Buruman = () => {
  return (
    <>
      <div id="idburuman"></div>
      <Header />
      <SideNav />
      <Shop
        title={"珈琲専科 ぶるまん"}
        titlesub={"サイフォンで淹れる40年間変わらない味"}
        classpic={"shop-pic shop-buruman"}
        classicon={"shop-icon shop-cafe"}
        catch={"サイフォンで淹れる40年間変わらない味"}
        genre01={"コーヒー専門店"}
        genre02={"カレーライス"}
        genre03={"shop-none"}
        text={
          "ぶるまんは昭和52年創業の歴史あるコーヒー専門店です。ぶるまんで採用しているサイフォン式は、コーヒーが出来上がるまでの過程が目でも楽しめ、演出効果が高いといった特徴があります。また、駐車場に車が入られた瞬間から、コーヒーカップを湯煎で温め始めるといった、専門店でしかできないこだわりもあります。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.5780923457883!2d132.43692371519955!3d33.46029698077113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2de4415582da7d1b!2z44G244KL44G-44KT!5e0!3m2!1sja!2sjp!4v1605912033423!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市松柏乙1046"}
        tel={"0894-24-4624"}
        time={"8:00～19:00、【土・日・祝】8:00～17:00"}
        holiday={"第２・４日曜日"}
        card={"不"}
        seat={"-"}
        room={"無"}
        reserved={"-"}
        parking={"有"}
      />
    </>
  );
};

export default Buruman;
