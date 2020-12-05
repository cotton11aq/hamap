import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Tarugen = () => {
  return (
    <>
      <div id="idtarugen"></div>
      <Header />
      <SideNav />
      <Shop
        title={"たる源"}
        titlesub={"準備中"}
        classpic={"shop-pic shop-tarugen"}
        classicon={"shop-icon shop-kaisen"}
        catch={"準備中"}
        genre01={"割烹・小料理"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={"準備中"}
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.576441396747!2d132.42127231519967!3d33.460339980771145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x19a377df39b0e843!2z44Gf44KL5rqQ!5e0!3m2!1sja!2sjp!4v1605736501143!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市船場通260-2"}
        tel={"0894-24-0458"}
        time={"17:00～22:00"}
        holiday={"日曜日"}
        card={"不"}
        seat={"1階：約15席"}
        room={"有"}
        reserved={"可（※要予約）"}
        parking={"無"}
      />
    </>
  );
};

export default Tarugen;
