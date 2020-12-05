import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Deri = () => {
  return (
    <>
      <div id="idderi"></div>
      <Header />
      <SideNav />
      <Shop
        title={"デリー"}
        titlesub={"準備中"}
        classpic={"shop-pic shop-deri"}
        classicon={"shop-icon shop-cafe"}
        catch={"準備中"}
        genre01={"お好み焼き"}
        genre02={"カレーライス"}
        genre03={"shop-none"}
        text={"準備中"}
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6753030629097!2d132.42236851519954!3d33.45776498077191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b36faa76b7e9208!2z44OH44Oq44O8!5e0!3m2!1sja!2sjp!4v1605915585885!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市1413-1(銀座7丁目)"}
        tel={"0894-24-5888"}
        time={"10:00～19:00"}
        holiday={"水曜日"}
        card={"不"}
        seat={"-"}
        room={"無"}
        reserved={"-"}
        parking={"無（最寄りの駐車場：新町角駐車場）"}
      />
    </>
  );
};

export default Deri;
