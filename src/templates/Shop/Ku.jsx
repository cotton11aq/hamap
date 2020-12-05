import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Ku = () => {
  return (
    <>
      <div id="idku"></div>
      <Header />
      <SideNav />
      <Shop
        title={"美食遊膳・空"}
        titlesub={"地元の魚を使用したお造りがオススメ！"}
        classpic={"shop-pic shop-ku"}
        classicon={"shop-icon shop-izakaya"}
        catch={
          "地元の魚を使用したお造りがオススメ！コスパも最高な予約必須のお店"
        }
        genre01={"居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "商店街に面した建物の二階にあります美食遊膳「空」。地酒も豊富であり、港町ならではのお料理を頂けます。明るいオーナーさんが作る料理は、見た目もコスパも満たし満足すること間違いなしです！仕入れによって変化する本日のメニューは必見です。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6750765526062!2d132.42366171519953!3d33.45777088077181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x94391e8762912041!2z576O6aOf6YGK6IazIOepug!5e0!3m2!1sja!2sjp!4v1605821849064!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市57 岩木屋ビル 2F"}
        tel={"0894-23-2064"}
        time={"17:30～23:30"}
        holiday={"水曜日"}
        card={"不"}
        seat={"16席（テーブル8席・テーブル８席）"}
        room={"無"}
        reserved={"可"}
        parking={"無（最寄りの駐車場：中央駐車場）"}
      />
    </>
  );
};

export default Ku;
