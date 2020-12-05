import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Mitsuba = () => {
  return (
    <>
      <div id="idmitsuba"></div>
      <Header />
      <SideNav />
      <Shop
        title={"みつば食堂"}
        titlesub={"手作りのやさしい味わい"}
        classpic={"shop-pic shop-mitsuba"}
        classicon={"shop-icon shop-chanpon"}
        catch={"手作りのやさしい味わいとアットホームな雰囲気が魅力"}
        genre01={"ちゃんぽん"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "鶏ガラや野菜を煮込んだ中華風スープと、ボリュームのある具材が自慢の手作りちゃんぽん。あっさりしたスープであるため全て飲み干してしまう。創業40年の完成された一品。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.8490874921495!2d132.42803691519939!3d33.45323808077314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe142d361923168ea!2z44G_44Gk44Gw6aOf5aCC!5e0!3m2!1sja!2sjp!4v1605613805269!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市古町２丁目２−３２"}
        tel={"0894-23-1314"}
        time={"10：00〜21：00、【土】～14：00"}
        holiday={"日曜日・祝日"}
        card={"不"}
        seat={"14席"}
        room={"無"}
        reserved={"不"}
        parking={"有（5台）"}
      />
    </>
  );
};

export default Mitsuba;
