import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Yakijozu = () => {
  return (
    <>
      <div id="idyakijozu"></div>
      <Header />
      <SideNav />
      <Shop
        title={"焼き上手"}
        titlesub={"香ばしさがそそる、新感覚のちゃんぽん"}
        classpic={"shop-pic shop-yakijozu"}
        classicon={"shop-icon shop-chanpon"}
        catch={"香ばしさがそそる、新感覚のちゃんぽん"}
        genre01={"焼きちゃんぽん"}
        genre02={"お好み焼き"}
        genre03={"モダン焼き飯"}
        text={
          "関西風のお好み焼きが人気の焼き上手では、鉄板で麺を焼いてからスープと合わせたちゃんぽんを提供します。食材を焼いてきた鉄板で麺を焼くことで、旨味と香ばしさが増し、食欲をそそります。また、地元、日土の豚肉など、味を知り尽くした地元産素材を使用しています。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.681368919041!2d132.42423331519942!3d33.45760698077189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f21e94d5e31b799!2z54S844GN5LiK5omL!5e0!3m2!1sja!2sjp!4v1605614889386!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市42-3"}
        tel={"0894-24-2556"}
        time={"17：00〜24：00（ラストオーダー：23:00）"}
        holiday={"不定休"}
        card={"不"}
        seat={"30席"}
        room={"無"}
        reserved={"可（30名以上）"}
        parking={"有（4台）"}
      />
    </>
  );
};

export default Yakijozu;
