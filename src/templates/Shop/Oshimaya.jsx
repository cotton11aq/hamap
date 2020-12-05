import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Oshimaya = () => {
  return (
    <>
      <div id="idoshimaya"></div>
      <Header />
      <SideNav />
      <Shop
        title={"大島屋"}
        titlesub={"生け簀で泳ぐフグ・アジの活き造りは絶品"}
        classpic={"shop-pic shop-oshimaya"}
        classicon={"shop-icon shop-kaisen"}
        catch={"生け簀で泳ぐフグ・アジの活き造りは絶品"}
        genre01={"ふぐ"}
        genre02={"魚介料理"}
        genre03={"海鮮料理"}
        text={
          "商店街の入り口から少し歩いたところにあります大島屋。ふぐ料理、海鮮料理のお店であり、外から見える生け簀には元気なアジが泳いでいます。港町であるがゆえ、リーズナブルな価格で都会に負けないレベルのお料理がいただけます。松竹梅のふぐコースをご用意しており、気分に合わせたコースがお楽しみいただけます。また、各種地酒（川亀、大吟醸、純米原酒、etc）も揃えており、お料理を引き立てます。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.679913883705!2d132.4218754151995!3d33.457644880771944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b51e91c967f3819!2z5aSn5bO25bGL!5e0!3m2!1sja!2sjp!4v1605735444378!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市矢野町７−１４４５−１"}
        tel={"0894-23-2151"}
        time={"17:00～23:00"}
        holiday={"不定休"}
        card={"可（JCB、AMEX、Diners）"}
        seat={"16席"}
        room={"有"}
        reserved={"可"}
        parking={"無（最寄りの駐車場：新町角駐車場）"}
      />
    </>
  );
};

export default Oshimaya;
