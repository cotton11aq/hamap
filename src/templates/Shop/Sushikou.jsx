import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Sushikou = () => {
  return (
    <>
      <div id="idsushikou"></div>
      <Header />
      <SideNav />
      <Shop
        title={"すし光"}
        titlesub={"豊後水道の地魚を旬で仕入れています！"}
        classpic={"shop-pic shop-sushikou"}
        classicon={"shop-icon shop-kaisen"}
        catch={
          "豊後水道の地魚を旬で仕入れています！ 贅沢な「ふぐコース」をお手頃価格で！"
        }
        genre01={"海鮮料理"}
        genre02={"地どり、地魚"}
        genre03={"なべ、宴会"}
        text={
          "味一番うえだはすべて予約制で、その日の朝、新鮮な魚を仕入れて美味しい料理を提供しています。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.563652237299!2d132.42127001519958!3d33.46067308077101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d883f3b33b7cade!2z44GZ44GX5YWJ!5e0!3m2!1sja!2sjp!4v1605653291222!5m2!1sja!2sjp"
        }
        address={"八幡浜市仲の町３９５"}
        tel={"0894-22-1130"}
        time={"10:00～22:00"}
        holiday={"不定休（月曜日）"}
        card={"可（VISA、JCB、Mastercard）"}
        seat={"カウンター6席、座席55席"}
        room={"有（6人、20人、10人×2）"}
        reserved={"可（20人部屋×2）"}
        parking={"3台"}
      />
    </>
  );
};

export default Sushikou;
