import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Ajiraku = () => {
  return (
    <>
      <div id="idajiraku"></div>
      <Header />
      <SideNav />
      <Shop
        title={"味楽食堂"}
        titlesub={"とろみのあるスープが絶品"}
        classpic={"shop-pic shop-ajiraku"}
        classicon={"shop-icon shop-chanpon"}
        catch={"とろみのあるスープが絶品！他では食べられないあんかけちゃんぽん"}
        genre01={"居酒屋"}
        genre02={"ちゃんぽん"}
        genre03={"shop-none"}
        text={
          "“特ちゃんぽん”は、鶏ガラベースのスープにとろみを加えることで、中太麺にスープがよく絡みおすすめです。また、落とし卵、エビ、イカ、豚肉、蒲鉾、炒め野菜と沢山の具材が入っています。ちゃんぽん以外のメニューも豊富なのが嬉しいところ！"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.5435180098793!2d132.42088541519956!3d33.4611974807709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x565a458d7f071bbb!2z5ZGz5qW96aOf5aCC!5e0!3m2!1sja!2sjp!4v1605614611374!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市桧谷４３５−２４"}
        tel={"0894-23-2814"}
        time={"11：00〜19：00"}
        holiday={"日曜日"}
        card={"不"}
        seat={"15席（カウンター4席、テーブル11席）"}
        room={"無"}
        reserved={"可"}
        parking={"無（最寄りの駐車場：商工会議所駐車場）"}
      />
    </>
  );
};

export default Ajiraku;
