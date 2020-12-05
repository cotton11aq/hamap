import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Ryokichi = () => {
  return (
    <>
      <div id="idryokichi"></div>
      <Header />
      <SideNav />
      <Shop
        title={"酉屋りょう吉"}
        titlesub={"酉はもちろん、豊富なドリンクメニューもおすすめ"}
        classpic={"shop-pic shop-ryokichi"}
        classicon={"shop-icon shop-izakaya"}
        catch={"酉はもちろん、豊富なドリンクメニューもおすすめ"}
        genre01={"焼き鳥居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "商店街の中心に位置する酉屋りょう吉。酉屋ということで、焼き鳥を中心としたメニューとなっております。店員さんはとても元気で、こっちまで元気になるそんなお店です。また、他の店舗では味わえない、八幡浜限定メニューもございますのでお見逃しなく！"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6660506639887!2d132.42206131519953!3d33.45800598077182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f43de5089a5775b!2z6YWJ5bGLIOOCiuOCh-OBhuWQiSDlhavluaHmtZzlupc!5e0!3m2!1sja!2sjp!4v1605820948060!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市1440-6"}
        tel={"0894-20-8310"}
        time={"17:00～24:00(L.O.23:00)"}
        holiday={"水曜日・毎月8日"}
        card={"不"}
        seat={"21席"}
        room={"あり（4人席×2）"}
        reserved={"可"}
        parking={"無（最寄りの駐車場：新町角駐車場）"}
      />
    </>
  );
};

export default Ryokichi;
