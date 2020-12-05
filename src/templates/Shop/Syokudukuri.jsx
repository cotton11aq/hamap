import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Syokudukuri = () => {
  return (
    <>
      <div id="idsyokudukuri"></div>
      <Header />
      <SideNav />
      <Shop
        title={"食造り 拓味"}
        titlesub={"親子で経営される海鮮居酒屋"}
        classpic={"shop-pic shop-syokudukuri"}
        classicon={"shop-icon shop-izakaya"}
        catch={"拓味？拓海？親子で経営される海鮮居酒屋"}
        genre01={"海鮮居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "商店街から一歩路地に入ったところにある食造り「拓味」。ドリンクの種類はもちろんのこと、郷土料理にも力を入れており、新鮮なお造りも味わえます。予算に合わせた飲み放題コースもあり、おすすめのお店です。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.577197762011!2d132.42225851519962!3d33.46032028077101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb230280d9e6ed7e!2z5ouT5ZGz!5e0!3m2!1sja!2sjp!4v1605820512315!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市新町269"}
        tel={"0894-24-5135"}
        time={"17:00～23:30"}
        holiday={"日曜日"}
        card={"不"}
        seat={"60席（1Fカウンター6席・掘りごたつ22席、2F：32席）"}
        room={"無 半個室あり"}
        reserved={"可（20人～50人可）"}
        parking={"有"}
      />
    </>
  );
};

export default Syokudukuri;
