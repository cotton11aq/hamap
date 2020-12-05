import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Bia = () => {
  return (
    <>
      <div id="idbia"></div>
      <Header />
      <SideNav />
      <Shop
        title={"ビア・レスト EYE・WALL（アイ・ウォール）"}
        titlesub={"八幡浜で唯一のビアレスト"}
        classpic={"shop-pic shop-bia"}
        classicon={"shop-icon shop-izakaya"}
        catch={"八幡浜で唯一のビアレスト"}
        genre01={"洋風居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "八幡浜市の中心街にあるビアレストアイウォール。ビアレストということで、豊富な種類のビールを揃えております。また、ビールに合うオシャレなフードメニューもご用意しておりますので、ぜひ一度お立ち寄りくださいませ。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.604372898397!2d132.4212591151996!3d33.45961248077143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b8a0513ce8f30e5!2z44OT44Ki44Os44K544OIIOOCouOCpOOCpuOCqeODvOODqw!5e0!3m2!1sja!2sjp!4v1605821607155!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市船場通379–5"}
        tel={"0894-22-5528"}
        time={"ランチ 11:30～13:40、ディナー17:00～24:00"}
        holiday={"日曜日"}
        card={"不"}
        seat={"33席（カウンター7席、テーブル26席）"}
        room={"無（仕切りあり）"}
        reserved={"※可（20人以上）"}
        parking={"無（最寄り：パークワン四国銀行八幡浜支店）"}
      />
    </>
  );
};

export default Bia;
