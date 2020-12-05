import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Aikatei = () => {
  return (
    <>
      <div id="idaikatei"></div>
      <Header />
      <SideNav />
      <Shop
        title={"レストラン 愛花亭"}
        titlesub={"バリエーション豊かなちゃんぽんを食べられるお店"}
        classpic={"shop-pic shop-aikatei"}
        classicon={"shop-icon shop-chanpon"}
        catch={"バリエーション豊かなちゃんぽんを食べられるお店"}
        genre01={"レストラン"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "カツオと鯛をベースとしたスープはあっさりした味となっています。メニューも豊富であり、とんこつ味やキムチ味もあるのでオススメです。ハーフサイズやおにぎりなどのサイドメニューもご用意しています。 黒い商店街誕生にて、黒だしちゃんぽんで参加しております！黒だしちゃんぽんを食べに来られるお客様が目立ちます！"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d286.67672970487956!2d132.42414373336808!3d33.461276776288244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81bec5f09ab9e93c!2z44Os44K544OI44Op44Oz5oSb6Iqx5Lqt!5e0!3m2!1sja!2sjp!4v1605566007827!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市新町5-304-2"}
        tel={"0894-24-2022"}
        time={"10:00～19:00"}
        holiday={"日曜日の13:00より"}
        card={"不"}
        seat={"28席"}
        room={"有（2人、6人、10人）"}
        reserved={"可（15人以上）"}
        parking={"3台（最寄り：八幡浜市役所駐車場 土日祝無料）"}
      />
    </>
  );
};

export default Aikatei;
