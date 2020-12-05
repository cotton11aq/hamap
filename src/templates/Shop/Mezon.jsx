import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Mezon = () => {
  return (
    <>
      <div id="idmezon"></div>
      <Header />
      <SideNav />
      <Shop
        title={"パン・メゾン"}
        titlesub={"仕入れから提供までこだわっています！"}
        classpic={"shop-pic shop-mezon"}
        classicon={"shop-icon shop-cafe"}
        catch={"仕入れから提供までこだわっています！"}
        genre01={"パン"}
        genre02={"洋菓子（その他）"}
        genre03={"パン・サンドイッチ（その他）"}
        text={
          "所有船、海幸丸で捕れた新鮮な魚をふんだんに使った料理を、綱元価格で！店舗内にて、鮮魚、手作り一夜干し等も購入できます。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.4667066735315!2d132.4216693151996!3d33.46319798077033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b0ea0ca83ff8615!2z44OR44OzIOODoeOCvuODsyDlhavluaHmtZzlupc!5e0!3m2!1sja!2sjp!4v1605916979086!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市北浜１丁目８−１５"}
        tel={"0894-27-0348"}
        time={"6:30～19:00"}
        holiday={"火曜日"}
        card={"-"}
        seat={"-"}
        room={"無"}
        reserved={"不"}
        parking={"有（21台）"}
      />
    </>
  );
};

export default Mezon;
