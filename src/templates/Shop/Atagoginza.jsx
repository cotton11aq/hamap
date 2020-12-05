import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Atagoginza = () => {
  return (
    <>
      <div id="idatagoginza"></div>
      <Header />
      <SideNav />
      <Shop
        title={"あたご 銀座店"}
        titlesub={"創業67年老舗の一品。"}
        classpic={"shop-pic shop-atagoginza"}
        classicon={"shop-icon shop-kaisen"}
        catch={"創業67年老舗の一品。"}
        genre01={"寿司"}
        genre02={"海鮮丼"}
        genre03={"鯛めし"}
        text={
          "鶏ガラベースの中華そば風で、あっさりとした家庭的な味。お土産用のちゃんぽんもお持ち帰りできますので、ご利用くださいませ。また、うどん、定食、カレーなどバリエーション豊かなメニューをご用意しておりますので、一度お越しくださいませ。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.687008606876!2d132.42254781519952!3d33.45746008077184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa91f3a7c7d6f3ee9!2z44GC44Gf44GU5a-_5Y-4IOmKgOW6p-W6l-WHuuWJjeWPl-S7mA!5e0!3m2!1sja!2sjp!4v1605737200011!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市須崎１４１０−７"}
        tel={"0894-22-4455"}
        time={"11：00〜21：00（L.O.20:30）"}
        holiday={"水曜日・変更もあり"}
        card={"不"}
        seat={"38席（座席28席、テーブル10席）"}
        room={"有"}
        reserved={"可（20人～50人）"}
        parking={"無（最寄りの駐車場： 新町角駐車場 ）"}
      />
    </>
  );
};

export default Atagoginza;
