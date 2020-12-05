import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Fuji = () => {
  return (
    <>
      <div id="idfuji"></div>
      <Header />
      <SideNav />
      <Shop
        title={"フジ観光"}
        titlesub={"新鮮な海鮮たっぷりの1ランク上のちゃんぽん"}
        classpic={"shop-pic shop-fuji"}
        classicon={"shop-icon shop-chanpon"}
        catch={"新鮮な海鮮たっぷりの1ランク上のちゃんぽん"}
        genre01={"上ちゃんぽん"}
        genre02={"カレーちゃんぽん"}
        genre03={"ちゃん定B(ちゃんぽん+チャーハン)"}
        text={
          "ベイシックなちゃんぽんだけでなく、カレー味など珍しいメニューもご用意。“上ちゃんぽん”はどーや市場直送のエビやイカなど海鮮の香りと旨味が詰まっています。特産品のじゃこ天も入ってボリューム満点。サイドメニューも豊富に用意してあり、男性もお腹一杯になるお店。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6768771166157!2d132.41655541519953!3d33.457723980771924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x16b773550db2f6d2!2z44OV44K46Kaz5YWJ!5e0!3m2!1sja!2sjp!4v1605612943709!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市沖新田１５８３−１５"}
        tel={"0894-23-2161"}
        time={"7：00〜14：00、16：00〜21：00（ラストオーダー20:30）"}
        holiday={"第2・4日曜日"}
        card={"不可"}
        seat={"36席"}
        room={"無"}
        reserved={"不"}
        parking={"有（2台）"}
      />
    </>
  );
};

export default Fuji;
