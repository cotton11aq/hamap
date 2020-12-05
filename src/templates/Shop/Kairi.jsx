import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Kairi = () => {
  return (
    <>
      <div id="idkairi"></div>
      <Header />
      <SideNav />
      <Shop
        title={"海里"}
        titlesub={"旬の魚を仕入れ、四季を感じるお魚料理が自慢"}
        classpic={"shop-pic shop-kairi"}
        classicon={"shop-icon shop-kaisen"}
        catch={"旬の魚を仕入れ、四季を感じるお魚料理が自慢"}
        genre01={"海鮮"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "みなと湯の隣にあります海鮮居酒屋「海里」。なんとこちらのお店、大将の知り合いに仲買人さんがいらっしゃることもあり、水揚げされたばかりの新鮮・珍しいお魚を仕入れております。そのため市場ではめったにお目にかかれない珍メニューも数多く揃えているとか…また、直接買い付けであるがゆえの低価格も注目です。4種類から選べるランチ営業も行っております。朝一で仕入れたお魚を一番早く食べられるランチタイム、是非一度足をお運びくださいませ。※魚が苦手なお客様のために、鶏肉を使用したメニューも揃えております。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.4823034851374!2d132.42032781519978!3d33.462791780770324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32fd88193d4bbc60!2z5rW36YeM!5e0!3m2!1sja!2sjp!4v1605736946919!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市北浜１丁目１５３３－３１"}
        tel={"0894-24-0220"}
        time={"11:00～14:00、16:30～21:00(L.O.20:30)"}
        holiday={"火曜日"}
        card={"不"}
        seat={"21席"}
        room={"無"}
        reserved={"可（要相談）"}
        parking={"無（最寄りの駐車場：北浜立体駐車場）"}
      />
    </>
  );
};

export default Kairi;
