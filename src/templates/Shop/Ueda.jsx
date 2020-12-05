import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Ueda = () => {
  return (
    <>
      <div id="idueda"></div>
      <Header />
      <SideNav />
      <Shop
        title={"味一番うえだ"}
        titlesub={"贅沢な「ふぐコース」をお手頃価格で！"}
        classpic={"shop-pic shop-ueda"}
        classicon={"shop-icon shop-kaisen"}
        catch={
          "産地直送だからできる価格！ 贅沢な「ふぐコース」をお手頃価格で！"
        }
        genre01={"海鮮料理"}
        genre02={"ふぐ料理"}
        genre03={"仕出し料理"}
        text={
          "味一番うえだはすべて予約制で、その日の朝、新鮮な魚を仕入れて美味しい料理を提供しています。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6753260978585!2d132.42064611519953!3d33.457764380771806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2550f74e427f5140!2z5ZGz5LiA55WqIOOBhuOBiOOBoA!5e0!3m2!1sja!2sjp!4v1605650401444!5m2!1sja!2sjp"
        }
        address={"八幡浜市大黒町1丁目"}
        tel={"0894-24-7101"}
        time={"10:00～22:00"}
        holiday={"なし"}
        card={"不"}
        seat={"70席（個室30,20,10席、テーブル10席）"}
        room={"有（2～4人,30,20,10席）"}
        reserved={"可（50人以上・要予約）"}
        parking={"4台 ※近くに市営駐車場有"}
      />
    </>
  );
};

export default Ueda;
