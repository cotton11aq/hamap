import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Doya = () => {
  return (
    <>
      <div id="iddoya"></div>
      <Header />
      <SideNav />
      <Shop
        title={"どーや食堂"}
        titlesub={"どーや市場で水揚げされたお魚を使った海鮮丼"}
        classpic={"shop-pic shop-doya"}
        classicon={"shop-icon shop-kaisen"}
        catch={
          "その日の仕入れでネタが変化!!どーや市場で水揚げされたお魚を使った海鮮丼"
        }
        genre01={"定食・食堂"}
        genre02={"魚介料理・海鮮料理"}
        genre03={"バーベキュー"}
        text={
          "道の駅みなっとにありますどーや食堂。こちらは八幡浜魚市場が近いこともあり新鮮な海鮮丼をはじめとした魚料理が楽しめます。また、７-１０時限定の朝食メニューには数量限定のまかない海鮮丼（６００円）もあります。少し早起きして本当に水揚げしたばかりのお魚を食べてみてはいかがでしょうか？"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.621407971412!2d132.4164051151995!3d33.459168780771606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x852577cb2bfa4670!2z44Gp44O844KE6aOf5aCC!5e0!3m2!1sja!2sjp!4v1605735110140!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市沖新田１５８１−２３"}
        tel={"0894-21-1537"}
        time={"7：00～10:00、10:00〜14：00、17:00～19:00"}
        holiday={"年中無休"}
        card={"不"}
        seat={"32席"}
        room={"無"}
        reserved={"可"}
        parking={"有"}
      />
    </>
  );
};

export default Doya;
