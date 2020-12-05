import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Kuimonya = () => {
  return (
    <>
      <div id="idkuimonya"></div>
      <Header />
      <SideNav />
      <Shop
        title={"くいもんや３０５"}
        titlesub={"予約必須のお店！くいもんやでさわごー（305）"}
        classpic={"shop-pic shop-kuimonya"}
        classicon={"shop-icon shop-izakaya"}
        catch={"予約必須のお店！くいもんやでさわごー（305）"}
        genre01={"総合居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "八幡浜の特産品であるお魚から創作料理まで、とにかくメニューが豊富です。詳細は写真ページにメニューを掲載しておりますのでご覧下さいませ。また、期間限定で鍋メニューもお楽しみいただけます！こちらはお1人様より承っておりますので、食べ比べも楽しめますよ！！"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.664488116123!2d132.42218961519947!3d33.45804668077168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa1db1982446d5f82!2z44GP44GE44KC44KT44KEIDMwNQ!5e0!3m2!1sja!2sjp!4v1605819246933!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市新町１−１４６５−１"}
        tel={"0894-22-4002"}
        time={"17:30～23:15（L.O. 22:30）"}
        holiday={"月曜日"}
        card={"不"}
        seat={"60席（座敷60席）"}
        room={"有（2人～30人に対応可）"}
        reserved={"不"}
        parking={"無（最寄りの駐車場：新町角駐車場）"}
      />
    </>
  );
};

export default Kuimonya;
