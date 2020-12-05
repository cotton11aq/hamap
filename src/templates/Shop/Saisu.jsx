import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Saisu = () => {
  return (
    <>
      <div id="idsaisu"></div>
      <Header />
      <SideNav />
      <Shop
        title={"済州島"}
        titlesub={"八幡浜駅、ニューホテルトヨからアクセス抜群"}
        classpic={"shop-pic shop-saisu"}
        classicon={"shop-icon shop-izakaya"}
        catch={"八幡浜駅、ニューホテルトヨからアクセス抜群"}
        genre01={"居酒屋"}
        genre02={"韓国料理"}
        genre03={"shop-none"}
        text={
          "ちょっと電車の待ち時間に、就寝前に立ち寄れる居酒屋「済州島」。注文した料理以外に、おかみさんのサービスでどんどん料理が出てきます笑これだけ食べてこの値段！？と驚くこと間違いなしです。店内はカウンター中心としたレイアウトとなっており、おかみさんと会話が楽しめるため、お一人様でも気軽に入れます。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6330793959496!2d132.43344351519954!3d33.45886478077165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6794101e10037cf4!2z5riI5bee5bO2!5e0!3m2!1sja!2sjp!4v1605819888206!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市 ７８０駅前"}
        tel={"0894-24-6609"}
        time={"17:00～22:00"}
        holiday={"ほぼ年中無休"}
        card={"不"}
        seat={"18席（カウンター10席、座席8席）"}
        room={"無"}
        reserved={"可（～17人）料理代一律 約1000円（ドリンク別） 事前予約"}
        parking={"無（最寄りの駐車場：駅前駐車場 ）"}
      />
    </>
  );
};

export default Saisu;
