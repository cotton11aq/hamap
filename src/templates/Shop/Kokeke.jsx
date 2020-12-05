import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Kokeke = () => {
  return (
    <>
      <div id="idkokeke"></div>
      <Header />
      <SideNav />
      <Shop
        title={"こけけ"}
        titlesub={"魚肴まかない処"}
        classpic={"shop-pic shop-kokeke"}
        classicon={"shop-icon shop-kaisen"}
        catch={"魚肴まかない処"}
        genre01={"寿司"}
        genre02={"魚介料理・海鮮料理"}
        genre03={"すっぽん"}
        text={
          "八幡浜港から水揚げされる多種多様な魚介類はじめ、網元直送鮮魚入荷！ 寿司屋歴30数年の大将が寿司はもちろん、新鮮な魚介類のまかない処として腕を振るいます。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.64853237144!2d132.42285591519962!3d33.45846228077172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf622e444d1eaf89a!2z6a2a6IK044G-44GL44Gq44GE5YemIOOBk-OBkeOBkQ!5e0!3m2!1sja!2sjp!4v1605735746878!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市165−3"}
        tel={"0894-22-2212"}
        time={"17:00～22:00"}
        holiday={"月曜日"}
        card={"不"}
        seat={"18席（カウンター6席　テーブル席12席）"}
        room={"有（20～30人可）2階座敷 二間あり"}
        reserved={"可（20人～50人可）"}
        parking={"無（最寄りの駐車場：中央駐車場）"}
      />
    </>
  );
};

export default Kokeke;
