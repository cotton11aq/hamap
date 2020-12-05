import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Maruyama = () => {
  return (
    <>
      <div id="idmaruyama"></div>
      <Header />
      <SideNav />
      <Shop
        title={"丸山ちゃんぽん"}
        titlesub={"親子で経営される海鮮居酒屋"}
        classpic={"shop-pic shop-maruyama"}
        classicon={"shop-icon shop-chanpon"}
        catch={"拓味？拓海？親子で経営される海鮮居酒屋"}
        genre01={"海鮮居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "商店街から一歩路地に入ったところにある食造り「拓味」。ドリンクの種類はもちろんのこと、郷土料理にも力を入れており、新鮮なお造りも味わえます。予算に合わせた飲み放題コースもあり、おすすめのお店です。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6201150703896!2d132.42165331557226!3d33.459202456194596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3545837b18f61acb%3A0x4e32d7aef1beebac!2z5Li45bGx44Gh44KD44KT44G944KT!5e0!3m2!1sja!2sjp!4v1605565850306!5m2!1sja!2sjp"
        }
        address={"〒796-0088 愛媛県八幡浜市新町２６９"}
        tel={"0894-24-5135"}
        time={"17:00 〜 23:00"}
        holiday={"日曜日"}
        card={"不"}
        seat={"60席（1Fカウンター6席・掘りごたつ22席、2F：32席）"}
        room={"無 半個室あり"}
        reserved={"可（20人～50人可）"}
        parking={"無"}
      />
    </>
  );
};

export default Maruyama;
