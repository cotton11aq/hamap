import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Heiwa = () => {
  return (
    <>
      <div id="idheiwa"></div>
      <Header />
      <SideNav />
      <Shop
        title={"平和伝炭火焼肉"}
        titlesub={"炭火で焼く焼肉屋さんここにあり！"}
        classpic={"shop-pic shop-heiwa"}
        classicon={"shop-icon shop-yakiniku"}
        catch={"炭火で焼く焼肉屋さんここにあり！"}
        genre01={"焼肉"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "八幡浜商工会議所の目の前にあります炭火焼肉「平和伝」。店内は二階建てでゆったりとお食事いただけます。メニューは定番のお肉から石焼ビビンバや韓国冷麵などもご用意しております。また、飲み放題付きのコースもございますのでご利用ください。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.554928975439!2d132.42066531519956!3d33.46090028077101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50d7f5e1c8e383d4!2z54Kt54Gr54S86IKJIOW5s-WSjOS8nQ!5e0!3m2!1sja!2sjp!4v1605871072660!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市朝潮橋４３５"}
        tel={"0894-24-2337"}
        time={"17:00～23:30"}
        holiday={"水曜日（日曜日までに予約すれば営業）"}
        card={"不"}
        seat={"１Ｆオープンフロア　２Ｆ個室（１０名）３室"}
        room={"有（10～20人可）"}
        reserved={"-"}
        parking={"有"}
      />
    </>
  );
};

export default Heiwa;
