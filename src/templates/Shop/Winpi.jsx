import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Winpi = () => {
  return (
    <>
      <div id="idwinpi"></div>
      <Header />
      <SideNav />
      <Shop
        title={"ウィンピー"}
        titlesub={"ヨーロッパ風のレトロな雰囲気が漂う老舗"}
        classpic={"shop-pic shop-winpi"}
        classicon={"shop-icon shop-cafe"}
        catch={"ヨーロッパ風のレトロな雰囲気が漂う老舗"}
        genre01={"カフェ"}
        genre02={"喫茶店"}
        genre03={"shop-none"}
        text={
          "八幡浜のメインストリートが交差する、最も交通量が多い通りにありますウィンピー。開業昭和43年という老舗でもあり、昔懐かしい味のイタリアンスパが今でも人気です。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6860526640467!2d132.4292443151995!3d33.45748498077198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b302b38eb4afada!2z44Km44Kk44Oz44OU44O8!5e0!3m2!1sja!2sjp!4v1605914818304!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市江戸岡1-1-1 丸元ビル １Ｆ"}
        tel={"0894-24-3666"}
        time={"8:00～20:00"}
        holiday={"火曜日"}
        card={"不"}
        seat={"57席"}
        room={"無"}
        reserved={"-"}
        parking={"無"}
      />
    </>
  );
};

export default Winpi;
