import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Kasuga = () => {
  return (
    <>
      <div id="idkasuga"></div>
      <Header />
      <SideNav />
      <Shop
        title={"春日料亭"}
        titlesub={"海・山・川の「幸」が味わえる料亭"}
        classpic={"shop-pic shop-kasuga"}
        classicon={"shop-icon shop-kaisen"}
        catch={"海・山・川の「幸」が味わえる料亭"}
        genre01={"懐石・会席料理"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "愛媛県八幡浜庁舎前にあります「春日料亭」。階段を登ると、そこは少し高級な雰囲気漂う旅館のようなエントランスが現れます。お料理は、うな重や海の幸を使用した定食、お子様ランチなど老若男女問わずご利用いただけます。また八幡浜では珍しい海鮮バーベキューなどもご利用いただけますので、一度足を運んでみてはいかがでしょうか？"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.5353935935423!2d132.41959211519938!3d33.46140908077096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeb20250e3b31e0ce!2z5pil5pel5paZ5Lqt!5e0!3m2!1sja!2sjp!4v1605736711940!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市港町438-26"}
        tel={"0894-35-6888"}
        time={"11:00～14:00、17:00～21:30"}
        holiday={"不定休"}
        card={"不"}
        seat={"-"}
        room={"あり（4人～）"}
        reserved={"可"}
        parking={"8台"}
      />
    </>
  );
};

export default Kasuga;
