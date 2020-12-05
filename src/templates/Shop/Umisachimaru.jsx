import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Umisachimaru = () => {
  return (
    <>
      <div id="idumisachimaru"></div>
      <Header />
      <SideNav />
      <Shop
        title={"綱元の台所 海幸丸"}
        titlesub={"仕入れから提供までこだわっています！"}
        classpic={"shop-pic shop-umisachimaru"}
        classicon={"shop-icon shop-kaisen"}
        catch={"仕入れから提供までこだわっています！"}
        genre01={"海鮮"}
        genre02={"定食"}
        genre03={"shop-none"}
        text={
          "所有船、海幸丸で捕れた新鮮な魚をふんだんに使った料理を、綱元価格で！店舗内にて、鮮魚、手作り一夜干し等も購入できます。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.623166369661!2d132.41750631519966!3d33.459122980771504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1288e0a1c3b28238!2z77yI5pyJ77yJ5pit5ZKM5rC055SjIOODiOODreODvOODq-W4gumtmuW4guWgtOW6lw!5e0!3m2!1sja!2sjp!4v1605653916554!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市沖新田1582-3"}
        tel={"0894-24-7711"}
        time={"11:00～14:00（無くなり次第終了）"}
        holiday={"土曜日"}
        card={"不"}
        seat={"35席（カウンター12席、テーブル23席）"}
        room={"無"}
        reserved={"不"}
        parking={"有（6台）"}
      />
    </>
  );
};

export default Umisachimaru;
