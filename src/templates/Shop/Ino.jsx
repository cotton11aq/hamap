import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Ino = () => {
  return (
    <>
      <div id="idino"></div>
      <Header />
      <SideNav />
      <Shop
        title={"いの"}
        titlesub={"美味しい鰻に舌鼓。"}
        classpic={"shop-pic shop-ino"}
        classicon={"shop-icon shop-izakaya"}
        catch={"美味しい鰻に舌鼓。"}
        genre01={"うなぎ"}
        genre02={"居酒屋"}
        genre03={"shop-none"}
        text={
          "いのは八幡浜駅と商店街の間にあるお店。各ホテル、旅館からアクセスがしやすいのも嬉しいところ。鰻料理以外にも、季節限定のしし鍋も楽しめます。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.654671284313!2d132.42787271519973!3d33.458302380771684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4faf6555f5072ece!2z44GE44Gu!5e0!3m2!1sja!2sjp!4v1605787174924!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市1092-1(矢野町2丁目)"}
        tel={"0894-22-2887"}
        time={"9:00～22:00"}
        holiday={"日曜日"}
        card={"不"}
        seat={"36席（最大40席）"}
        room={"無"}
        reserved={"※可 （二階の宴会場）"}
        parking={"有"}
      />
    </>
  );
};

export default Ino;
