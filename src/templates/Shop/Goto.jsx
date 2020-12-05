import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Goto = () => {
  return (
    <>
      <div id="idgoto"></div>
      <Header />
      <SideNav />
      <Shop
        title={"菓子工房 後藤"}
        titlesub={"和菓子屋さんが作る本気のかき氷"}
        classpic={"shop-pic shop-goto"}
        classicon={"shop-icon shop-cafe"}
        catch={"自家製練乳に注目！和菓子屋さんが作る本気のかき氷"}
        genre01={"テイクアウト"}
        genre02={"和菓子"}
        genre03={"shop-none"}
        text={
          "八幡浜のメインロードに面した【菓子工房 後藤】。和菓子からプリンまで幅広いお菓子をご用意しております。夏限定のかき氷は、いちご・抹茶・みるく・もも から選べます♪注目は。自家製練乳！和菓子屋さんが作る練乳はどこか上品なテイスト。菓子・かき氷以外にも贈答品のお菓子などもご用意しておりますので、ぜひ一度足をお運びくださいませ。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6901221351623!2d132.42436131519952!3d33.457378980772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb92b475eef5c031!2z6I-T5a2Q5bel5oi_IOW-jOiXpA!5e0!3m2!1sja!2sjp!4v1605917757122!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市桧谷１３８５"}
        tel={"0894-22-0601"}
        time={"9:00～19:00（L.O.18:30）"}
        holiday={"火曜日"}
        card={"不"}
        seat={"店内テーブル（4席）"}
        room={"-"}
        reserved={"-"}
        parking={"有（2台）"}
      />
    </>
  );
};

export default Goto;
