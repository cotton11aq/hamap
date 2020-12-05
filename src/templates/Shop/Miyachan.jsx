import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Miyachan = () => {
  return (
    <>
      <div id="idkokeke"></div>
      <Header />
      <SideNav />
      <Shop
        title={"たこ焼き みやちゃん"}
        titlesub={"たこ焼き・かき氷、ふらっと立ち寄れるたこ焼き屋さん"}
        classpic={"shop-pic shop-miyachan"}
        classicon={"shop-icon shop-konamono"}
        catch={"たこ焼き・かき氷、ふらっと立ち寄れるたこ焼き屋さん"}
        genre01={"たこ焼き"}
        genre02={"かき氷"}
        genre03={"shop-none"}
        text={
          "商店街の入り口にありますたこ焼き「みやちゃん」。こちらのお店、テイクアウトもイートインも可能となっています。たこ焼きは８個400円になります。３パックで１０００円とお得な得セットもございます。お電話にて事前予約しておくと待ち時間無くお買い求めいただけます。かき氷200円"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6764240964567!2d132.4249339151994!3d33.457735780771884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2d8ba6f4189b505!2z44Gf44GT54S844GNIOOBv-OChOOBoeOCg-OCkw!5e0!3m2!1sja!2sjp!4v1605919199517!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市桧谷１１７４"}
        tel={"090-1175-6639"}
        time={"14:00頃～20:00頃"}
        holiday={"水曜日"}
        card={"不"}
        seat={"8席"}
        room={"無"}
        reserved={"無"}
        parking={"無（店舗前に寄せて停めて）"}
      />
    </>
  );
};

export default Miyachan;
