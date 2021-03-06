import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Tsukiten = () => {
  return (
    <>
      <div id="idtsukiten"></div>
      <Header />
      <SideNav />
      <Shop
        title={"月天"}
        titlesub={"創意工夫から生み出される幾多のメニュー"}
        classpic={"shop-pic shop-tsukiten"}
        classicon={"shop-icon shop-izakaya"}
        catch={"創意工夫から生み出される幾多のメニュー"}
        genre01={"居酒屋"}
        genre02={"中華料理"}
        genre03={"寿司"}
        text={
          "港町として栄えた八幡浜で、市民に愛され続けているソウルフード「八幡浜ちゃんぽん」を提供する店の一つです。地魚にこだわり、寿司、刺身、居酒屋メニュー、中華、郷土料理の（ちゃんぽん・じゃこ天・さつま飯）など取り揃えております。季節限定メニューなどお客様の気持ちに応える事へのこだわりと、地域の味をお伝えできればと、毎日元気に営業しております。もつ鍋も人気です。2006年オープンとまだ若いお店ですが、ご来店頂ければ、ドリンク、フードメニュー共に選べる楽しさをモットーに必ずお好みのメニューに出会えるはずです。皆様のご来店を心よりお待ちしております。"
        }
        introduce02={"introduce-other"}
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6801403932614!2d132.42339121519953!3d33.457638980771875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x45816b10a93365c5!2z44KC44Gk6Y2L44OA44Kk44OL44Oz44Kw5bGF6aOf5bGLIOaciOWkqQ!5e0!3m2!1sja!2sjp!4v1605819021149!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市矢野町６−３６−９"}
        tel={"0894-24-5825"}
        time={"17:00～24:00(L.O.23:00)"}
        holiday={"火曜日"}
        card={"不"}
        seat={"55席"}
        room={"有（2人可、4人可、8人可、10～20人可）"}
        reserved={"可（20人～50人可）"}
        parking={"無（最寄りの駐車場：新町角駐車場）"}
      />
    </>
  );
};

export default Tsukiten;
