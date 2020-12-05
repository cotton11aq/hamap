import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Chouchou = () => {
  return (
    <>
      <div id="idchouchou"></div>
      <Header />
      <SideNav />
      <Shop
        title={"Café chouchou"}
        titlesub={"八幡浜のグルメが大集合"}
        classpic={"shop-pic shop-chouchou"}
        classicon={"shop-icon shop-cafe"}
        catch={
          "石焼きちゃんぽん、みかんのミルフィーユ、みかんジュース！八幡浜のグルメが大集合"
        }
        genre01={"カフェ"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "道の駅みなっとにありますカフェシュシュ。フェリー乗り場から近いということもあり、少しの待ち時間に立ち寄れるのが嬉しいところ。八幡浜市の特産品を中心に豊富なメニューが揃っています。テイクアウトメニューもございますのでお気軽にお立ち寄りくださいませ。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.65166133903!2d132.41641331519955!3d33.45838078077162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x764dea5414344123!2zY2FmZSBjaG91Y2hvdSDjgqvjg5Xjgqfjgrfjg6Xjgrfjg6U!5e0!3m2!1sja!2sjp!4v1605914545401!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市沖新田１５８１−２３"}
        tel={"0894-36-2856"}
        time={"8:00～18:00"}
        holiday={"年中無休"}
        card={"-"}
        seat={"-"}
        room={"無"}
        reserved={"不"}
        parking={"有"}
      />
    </>
  );
};

export default Chouchou;
