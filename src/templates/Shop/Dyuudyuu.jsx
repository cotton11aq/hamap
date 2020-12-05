import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Dyuudyuu = () => {
  return (
    <>
      <div id="iddyuudyuu"></div>
      <Header />
      <SideNav />
      <Shop
        title={"レストランぢゅうぢゅう"}
        titlesub={"創業時から愛される味！"}
        classpic={"shop-pic shop-dyuudyuu"}
        classicon={"shop-icon shop-chanpon"}
        catch={"創業時から愛される味！"}
        genre01={"居酒屋"}
        genre02={"ちゃんぽん"}
        genre03={"イタリアン"}
        text={
          "創業時から提供しているちゃんぽんは、鶏ガラスープが美味しさの秘訣。海鮮類や、野菜などの地元素材をたっぷり使っている。人気の鯛釜めしとセットで味わうのがオススメである。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21602.069696797356!2d132.41569913924195!3d33.44667314175122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81444de6bbddf4cb!2z44Gi44KF44GG44Gi44KF44GG!5e0!3m2!1sja!2sjp!4v1605566962670!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市1398新川通"}
        tel={"0894-24-1010"}
        time={"11：00〜14：00、17：00〜20：30"}
        holiday={"月曜日"}
        card={"不"}
        seat={"80席"}
        room={"有（4名様用：4室、8名様用：3室、20名様用：1室）"}
        reserved={"可（30名以上）"}
        parking={"有（3台）"}
      />
    </>
  );
};

export default Dyuudyuu;
