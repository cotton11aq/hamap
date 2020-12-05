import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Kinomi = () => {
  return (
    <>
      <div id="idkinomi"></div>
      <Header />
      <SideNav />
      <Shop
        title={"田舎料理 木の実"}
        titlesub={"次の日に響かない！ノンオイルちゃんぽん"}
        classpic={"shop-pic shop-kinomi"}
        classicon={"shop-icon shop-chanpon"}
        catch={"次の日に響かない！ノンオイルちゃんぽん"}
        genre01={"居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "おふくろの味を堪能できるお食事処。居酒屋メニューと共に人気なのがノンオイルで作られたちゃんぽん。ヘルシーということで、〆にちゃんぽんを食べても次の日に響かないのがうれしい。ちゃんぽんのみのご利用もお待ちしています。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6720215204405!2d132.425264315572!3d33.4578504562649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35458483cf71068d%3A0xbc532929a568228a!2z5pyo44Gu5a6f!5e0!3m2!1sja!2sjp!4v1605566078727!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市矢野町4-1130-3"}
        tel={"0894-24-5388"}
        time={"17:00～1:00"}
        holiday={"第1、第3、第5火曜日"}
        card={"不"}
        seat={"15席（カウンター７席、座席４席×２）"}
        room={"無"}
        reserved={"不"}
        parking={"無（最寄りの駐車場：新川駐車場）"}
      />
    </>
  );
};

export default Kinomi;
