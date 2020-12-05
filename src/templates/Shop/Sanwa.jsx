import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Sanwa = () => {
  return (
    <>
      <div id="idsanwa"></div>
      <Header />
      <SideNav />
      <Shop
        title={"三和ビジネスホテル"}
        titlesub={"宇和海を眺めながら味わうちゃんぽん"}
        classpic={"shop-pic shop-sanwa"}
        classicon={"shop-icon shop-chanpon"}
        catch={"宇和海を眺めながら味わうちゃんぽん"}
        genre01={"ちゃんぽん"}
        genre02={"うどんセット"}
        genre03={"浜辺定食"}
        text={
          "八幡浜港に近いビジネスホテルに隣接するレストランは、フェリーの待ち時間やみなっとでの帰りに立ち寄れるスポット。じっくりと煮込んだ鶏ガラといりこから取ったダシをミックスしたスープと地元産のじゃこ天とかまぼこをたっぷり使っています。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.671599212136!2d132.4166893155722!3d33.4578614562641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3545849bd0efe525%3A0x1adb3e70b3e3cf35!2z5LiJ5ZKM44OT44K444ON44K544Ob44OG44Or!5e0!3m2!1sja!2sjp!4v1605566246415!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市沖新田1583-14"}
        tel={"0894-24-3838"}
        time={"8：00〜14：00、17：00〜21：00（ラストオーダー14:00、21:00）"}
        holiday={"日曜日"}
        card={"可"}
        seat={"50席"}
        room={"無"}
        reserved={"不"}
        parking={"15台"}
      />
    </>
  );
};

export default Sanwa;
