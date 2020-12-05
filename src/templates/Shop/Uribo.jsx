import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Uribo = () => {
  return (
    <>
      <div id="iduribo"></div>
      <Header />
      <SideNav />
      <Shop
        title={"うり坊"}
        titlesub={"準備中"}
        classpic={"shop-pic shop-uribo"}
        classicon={"shop-icon shop-izakaya"}
        catch={"準備中"}
        genre01={"居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={"準備中"}
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.660476161191!2d132.42129081519963!3d33.458151180771694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5fe250c568017e00!2z44GG44KK5Z2K!5e0!3m2!1sja!2sjp!4v1605818115738!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市千代田町１４６０−２"}
        tel={"0894-22-5551"}
        time={"17:30～23:00（月～木） 17:30～00:00（金・土）"}
        holiday={"日曜日"}
        card={"-"}
        seat={"-"}
        room={"-"}
        reserved={"-"}
        parking={"-"}
      />
    </>
  );
};

export default Uribo;
