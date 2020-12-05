import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Monburan = () => {
  return (
    <>
      <div id="idmonburan"></div>
      <Header />
      <SideNav />
      <Shop
        title={"モンブラン"}
        titlesub={"創業40年以上の老舗喫茶店"}
        classpic={"shop-pic shop-monburan"}
        classicon={"shop-icon shop-cafe"}
        catch={"創業40年以上の老舗喫茶店"}
        genre01={"喫茶店"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "商店街の入口から少し入ったところにありますモンブラン。昔懐かしいナポリタンやオムライスが食べられます。また料理もおすすめですが、フルーツを贅沢に使用したパフェも食べて欲しい一品です。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6711567669404!2d132.42204231519952!3d33.457872980771896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa87a9cb00c1c2acb!2z44Oi44Oz44OW44Op44Oz!5e0!3m2!1sja!2sjp!4v1605915358071!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市新町1-1440"}
        tel={"0894-22-0166"}
        time={"8:15～22:00"}
        holiday={"木曜日"}
        card={"不"}
        seat={"38席"}
        room={"無"}
        reserved={"-"}
        parking={"無（最寄りの駐車場：新町角駐車場）"}
      />
    </>
  );
};

export default Monburan;
