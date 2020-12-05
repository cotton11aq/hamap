import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Iguru = (props) => {
  return (
    <>
      <div id="idiguru"></div>
      <Header />
      <SideNav />
      <Shop
        title={"ちゃんぽん亭 イーグル"}
        titlesub={"先代から引き継ぐ秘伝の味。"}
        classpic={"shop-pic shop-iguru"}
        classicon={"shop-icon shop-chanpon"}
        catch={
          "先代から引き継ぐ伝統の味。コクのある濃厚スープは、まさに絶品！！"
        }
        genre01={"ちゃんぽん"}
        genre02={"定食屋"}
        genre03={"shop-none"}
        text={
          "横浜で料理の修行をしていた先代が試行錯誤を重ねた結果生まれた味です。<br />スープが白濁しないように細心の注意を払った火加減により仕上げた出汁に、炒めた野菜の旨味と風味が良く合います。横浜系ラーメンのような深いコクが堪能できます。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.567769070689!2d132.42147161557213!3d33.46056585612366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35458482cfd3052f%3A0x517b7253030a45f4!2z44Gh44KD44KT44G944KT5LqtIOOCpOODvOOCsOODqw!5e0!3m2!1sja!2sjp!4v1604920085792!5m2!1sja!2sjp"
        }
        address={"〒123−4567 愛媛県八幡浜市123"}
        tel={"0894-22-2492"}
        time={"11:30 〜 21:00（L.O.20:30）"}
        holiday={"水曜日"}
        card={"不"}
        seat={"22席"}
        room={"無"}
        reserved={"不可"}
        parking={"無"}
      />
    </>
  );
};

export default Iguru;
