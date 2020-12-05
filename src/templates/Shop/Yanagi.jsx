import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Yanagi = () => {
  return (
    <>
      <div id="idyanagi"></div>
      <Header />
      <SideNav />
      <Shop
        title={"YaなGi・カフェ"}
        titlesub={"半個室で過ごす、モダンなカフェ"}
        classpic={"shop-pic shop-winpi"}
        classicon={"shop-icon shop-cafe"}
        catch={"半個室で過ごす、モダンなカフェ"}
        genre01={"カフェ"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "フェリー乗り場から大洲方面へ500メートルほど進んだところにありますやなぎカフェ。オーナーさんの妻が焼くシフォンケーキとコーヒーのセットがおすすめです。店内も個室では無いものの、観葉植物などで仕切られており、落ち着いた時間を過ごせます。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.693577337546!2d132.4212105151993!3d33.457288980771956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d60b719791fd25b!2zWWHjgapHaSDjgqvjg5Xjgqc!5e0!3m2!1sja!2sjp!4v1605915096529!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市千代田1460-173"}
        tel={"0894-24-3478"}
        time={"8:00～18:00"}
        holiday={"水曜日"}
        card={"不"}
        seat={"18席"}
        room={"無"}
        reserved={"-"}
        parking={"有（2台）"}
      />
    </>
  );
};

export default Yanagi;
