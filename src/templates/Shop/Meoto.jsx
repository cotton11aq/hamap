import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Meoto = () => {
  return (
    <>
      <div id="idmeoto"></div>
      <Header />
      <SideNav />
      <Shop
        title={"小鍋料理 めおと"}
        titlesub={"父、息子と二世代で経営しています！"}
        classpic={"shop-pic shop-meoto"}
        classicon={"shop-icon shop-izakaya"}
        catch={"小鍋料理 めおとは、父、息子と二世代で経営しています！"}
        genre01={"居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "郷土味あふれるおやじの料理と、バラエティあふれる息子の料理、どちらも味わえるのが特徴です。また、冬季は３種類の１人鍋がメニューに加わり、食欲をそそります。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6149502548133!2d132.4205673151996!3d33.45933698077138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x253070f715d9a3e2!2z44KB44GK44Go!5e0!3m2!1sja!2sjp!4v1605819484069!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市1526-126"}
        tel={"0894-22-5847"}
        time={"17:00～22:00"}
        holiday={"月曜日"}
        card={"不"}
        seat={"38席（座敷27席、カウンター11席）"}
        room={"有（７人）"}
        reserved={"不"}
        parking={"有（２台）"}
      />
    </>
  );
};

export default Meoto;
