import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Dosanko = () => {
  return (
    <>
      <div id="idDosanko"></div>
      <Header />
      <SideNav />
      <Shop
        title={"どさん子ラーメン"}
        titlesub={"地元に愛され40年"}
        classpic={"shop-pic shop-dosanko"}
        classicon={"shop-icon shop-menrui"}
        catch={
          "地元に愛され40年。チェーン店でありながら、独自の進化を遂げたオリジナルメニューを堪"
        }
        genre01={"ラーメン"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "フェリー乗り場の少し手前にあります札幌ラーメンのお店「どさんこラーメン」。チェーン店でありながら、全メニューがオリジナルといった珍しいお店です。人気の味噌やバターを中心としたラーメンに負けないくらいオススメなのが「黒い焼き飯」です。メニュー上は「焼き飯」なのですが色が黒色！黒い商店街で推している八幡浜。是非一度食べてみてください。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.69455341064!2d132.4217075155721!3d33.457263556295274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb56ef3139928f7b8!2z5pyt5bmM44Op44O844Oh44OzIOOBqeOBleOCk-WtkCDlhavluaHmtZzlupc!5e0!3m2!1sja!2sjp!4v1605780046989!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市昭和通１４５８"}
        tel={"050-5593-3506"}
        time={"11:00～15:00、17:00～21:00"}
        holiday={"月曜日（祭日は営業）"}
        card={"不"}
        seat={"12席"}
        room={"無"}
        reserved={"無"}
        parking={"無（最寄りの駐車場：新川駐車場 ）"}
      />
    </>
  );
};

export default Dosanko;
