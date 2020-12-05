import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Sushiishin = () => {
  return (
    <>
      <div id="idsushiishin"></div>
      <Header />
      <SideNav />
      <Shop
        title={"鮨一心"}
        titlesub={"準備中"}
        classpic={"shop-pic shop-sushiishin"}
        classicon={"shop-icon shop-kaisen"}
        catch={"準備中"}
        genre01={"寿司"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={"準備中"}
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.600975074295!2d132.42235331519947!3d33.45970098077124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9edd2527e767a569!2z5LiA5b-D!5e0!3m2!1sja!2sjp!4v1605736305374!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市船場通260-2"}
        tel={"0894-22-1718"}
        time={"-"}
        holiday={"-"}
        card={"不"}
        seat={"-"}
        room={"有"}
        reserved={"可"}
        parking={"無"}
      />
    </>
  );
};

export default Sushiishin;
