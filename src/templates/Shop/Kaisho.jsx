import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Kaisho = () => {
  return (
    <>
      <div id="idkaisho"></div>
      <Header />
      <SideNav />
      <Shop
        title={"海将"}
        titlesub={"港町ならではの海鮮居酒屋"}
        classpic={"shop-pic shop-kaisho"}
        classicon={"shop-icon shop-izakaya"}
        catch={"港町ならではの海鮮居酒屋"}
        genre01={"居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "中央駐車場から徒歩３０秒の距離にあります海鮮居酒屋「海将」。明るくきれいなお店は海鮮を中心とした豊富な料理が堪能できます。店内で揚げる小エビの唐揚げや、じゃこ天はぜひ食べていただきたい一品。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6253355698054!2d132.42235691519943!3d33.45906648077151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfe0ff715afc8004!2z5bGF6YWS5bGL5rW35bCG!5e0!3m2!1sja!2sjp!4v1605787727758!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市1423-6"}
        tel={"0894-22-5222"}
        time={"17:30～23:00"}
        holiday={"水曜日"}
        card={"不"}
        seat={"22人 / 部屋（二部屋あり）"}
        room={"有"}
        reserved={"可"}
        parking={"無（最寄りの駐車場：中央駐車場）"}
      />
    </>
  );
};

export default Kaisho;
