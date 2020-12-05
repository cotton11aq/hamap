import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Kimi = () => {
  return (
    <>
      <div id="idkimi"></div>
      <Header />
      <SideNav />
      <Shop
        title={"お好み焼き・きみ"}
        titlesub={"みなと湯の後はお好み焼きで決定"}
        classpic={"shop-pic shop-kimi"}
        classicon={"shop-icon shop-izakaya"}
        catch={"みなと湯の後はお好み焼きで決定"}
        genre01={"居酒屋"}
        genre02={"お好み焼き"}
        genre03={"shop-none"}
        text={
          "みなと湯から徒歩二分の距離にありますお好み焼きのお店「きみ」。昔ながらの雰囲気が漂う店内なので落ち着いてお食事が楽しめます。温泉あがりにお好み焼きとビールで一杯いかがでしょうか？"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.495619389829!2d132.4198063151997!3d33.46244498077054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcfcc143cee1fa868!2z44GK5aW944G_54S8IOOBjeOBvw!5e0!3m2!1sja!2sjp!4v1605818343466!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市北浜1-6-19"}
        tel={"0894-22-5183"}
        time={"18:00～22:00"}
        holiday={"日曜日・臨時休業あり"}
        card={"不"}
        seat={"18席"}
        room={"無"}
        reserved={"※可 (要問合せ)"}
        parking={"無（最寄りの駐車場：北浜立体駐車場）"}
      />
    </>
  );
};

export default Kimi;
