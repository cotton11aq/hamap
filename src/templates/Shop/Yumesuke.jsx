import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Yumesuke = () => {
  return (
    <>
      <div id="idyumesuke"></div>
      <Header />
      <SideNav />
      <Shop
        title={"隠れ町 ゆめ助"}
        titlesub={"ひっそりとたたずむ隠れ家"}
        classpic={"shop-pic shop-yumesuke"}
        classicon={"shop-icon shop-izakaya"}
        catch={"ひっそりとたたずむ隠れ家"}
        genre01={"居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "商店街の裏路地にたたずむ隠れ家「ゆめ助」。居酒屋とは思えないたたずまいから、女子グループに人気だとか。港町だから楽しめるお造りやじゃこ天は是非とも味わって頂きたい一品。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.582953036034!2d132.42231631519948!3d33.460170380771096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a6984efe8a96b5!2z6Zqg44KM55S6IOOChuOCgeWKqQ!5e0!3m2!1sja!2sjp!4v1605818808473!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市新栄町263"}
        tel={"0894-24-2803"}
        time={"17:30～22:30"}
        holiday={"日曜日"}
        card={"不"}
        seat={"10席"}
        room={"有"}
        reserved={"可"}
        parking={"無（最寄りの駐車場：中央駐車場）"}
      />
    </>
  );
};

export default Yumesuke;
