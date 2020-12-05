import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Yochatei = () => {
  return (
    <>
      <div id="idyochatei"></div>
      <Header />
      <SideNav />
      <Shop
        title={"よっちゃっ亭"}
        titlesub={"女性に人気のお店！フレンチ出身のオーナーが作る料理に舌鼓"}
        classpic={"shop-pic shop-yochatei"}
        classicon={"shop-icon shop-izakaya"}
        catch={"女性に人気のお店！フレンチ出身のオーナーが作る料理に舌鼓"}
        genre01={"居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "商店街に面するビルの二階にありますフレンチ居酒屋「よっちゃっ亭」。知らないとなかなか見つける事ができない隠れ家的なお店です。フレンチ出身ということで、お料理がとてもきれいです。もちろん見た目だけでなく味もいいです！私、ここまでフレンチで押してきましたが、おすすめは「里芋のチーマヨグラタン」です笑　個室はありませんが、おしゃれなお料理を楽しめるため大切な人とのデートにもおすすめです。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.685833833675!2d132.42371841519955!3d33.45749068077195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e6d3734aadbfbd4!2z44KI44Gj44Gh44KD44Gj5Lqt!5e0!3m2!1sja!2sjp!4v1605822603838!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市14 丸二ビル ２Ｆ"}
        tel={"0894-22-5363"}
        time={"17:30～23:00"}
        holiday={"日曜日"}
        card={"不"}
        seat={"20席"}
        room={"無"}
        reserved={"可（20人以下可）"}
        parking={"無（最寄りの駐車場：新川駐車場）"}
      />
    </>
  );
};

export default Yochatei;
