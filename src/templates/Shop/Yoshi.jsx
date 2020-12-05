import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Yoshi = () => {
  return (
    <>
      <div id="idyoshi"></div>
      <Header />
      <SideNav />
      <Shop
        title={"吉左右"}
        titlesub={"準備中"}
        classpic={"shop-pic shop-yoshi"}
        classicon={"shop-icon shop-kaisen"}
        catch={"準備中"}
        genre01={"割烹・小料理"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={"準備中"}
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.808942654479!2d132.3962641152!3d33.48032468076529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca3a780f28a0d127!2z5ZCJ5bem5Y-z!5e0!3m2!1sja!2sjp!4v1605737426021!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市保内町川之石1-56-3"}
        tel={"0894-36-0988"}
        time={"11:30～14:00、17:00～"}
        holiday={"火曜日"}
        card={"不"}
        seat={"-"}
        room={"有"}
        reserved={"-"}
        parking={"有"}
      />
    </>
  );
};

export default Yoshi;
