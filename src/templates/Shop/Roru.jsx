import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Roru = () => {
  return (
    <>
      <div id="idroru"></div>
      <Header />
      <SideNav />
      <Shop
        title={"Roll"}
        titlesub={
          "三代続く青果店のフルーツを使ったクレープとコーヒーのお店「Roll」"
        }
        classpic={"shop-pic shop-roru"}
        classicon={"shop-icon shop-cafe"}
        catch={
          "三代続く青果店のフルーツを使ったクレープとコーヒーのお店「Roll」"
        }
        genre01={"テイクアウト"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "みなっとにありますクレープとコーヒーのお店「Roll」。こちらのお店では、三世代続く松末青果店の新鮮なフルーツを使用したクレープがいただけます♪コーヒーとクレープを片手に、八幡浜湾に沈む夕日を眺めるのが私のオススメです。また、夏季限定でかき氷も楽しめますので是非一度「Roll」にお越しください。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6386194505253!2d132.41666241519943!3d33.45872048077163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x375d84a59258854d!2sRoll%20Crepe%20Coffe!5e0!3m2!1sja!2sjp!4v1605917532180!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市沖新田1581-23"}
        tel={"0894-22-0845"}
        time={"10:00～18:00"}
        holiday={"水曜日"}
        card={"不"}
        seat={"テラス（4人）"}
        room={"-"}
        reserved={"-"}
        parking={"有（みなっと）"}
      />
    </>
  );
};

export default Roru;
