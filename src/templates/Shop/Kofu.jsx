import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Kofu = () => {
  return (
    <>
      <div id="idkofu"></div>
      <Header />
      <SideNav />
      <Shop
        title={"古風酒菜工房"}
        titlesub={"ゆっくりした時間を過ごせるアットホームなお店"}
        classpic={"shop-pic shop-kofu"}
        classicon={"shop-icon shop-izakaya"}
        catch={"ゆっくりした時間を過ごせるアットホームなお店"}
        genre01={"居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "商店街の入り口にあります地元食材を楽しめるお店「古風酒菜工房」。アットホームな雰囲気漂うお店なので、気を使うことなくお1人様から入れます。人数に合わせたお造り、女将の手造り料理などメニューも豊富。地酒もたくさん用意してあり、飲み比べも人気です。また、主要ホテルから近くアクセスが良いので、出張や旅行の方にもおすすめです。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.685672590221!2d132.42150911519965!3d33.45749488077193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x293c11b79004956c!2z6YWS6I-c5bel5oi_IOWPpOmiqA!5e0!3m2!1sja!2sjp!4v1605819685773!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市八幡浜1458-25"}
        tel={"0894-29-1757"}
        time={"18:00～23:00"}
        holiday={"日曜日"}
        card={"不"}
        seat={"25席（カウンター５席、テーブル20席）"}
        room={"無"}
        reserved={"可"}
        parking={"あり（最寄りの駐車場：新川駐車場）"}
      />
    </>
  );
};

export default Kofu;
