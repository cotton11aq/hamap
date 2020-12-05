import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Nagayama = () => {
  return (
    <>
      <div id="idnagayama"></div>
      <Header />
      <SideNav />
      <Shop
        title={"三代目長山精肉店"}
        titlesub={"個室完備！お一人様からお楽しみ頂ける個室焼肉屋"}
        classpic={"shop-pic shop-nagayama"}
        classicon={"shop-icon shop-yakiniku"}
        catch={"個室完備！お一人様からお楽しみ頂ける個室焼肉屋"}
        genre01={"焼肉"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "江戸岡交差点から南下すること徒歩4分にあります長山精肉店。店内はシックな雰囲気＆全個室で落ち着いてお食事ができます。三代目という歴史あるお店でもあり、お肉の味はお墨付きです。焼肉屋では珍しいテイクアウトメニューもございます。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.811559891733!2d132.4301109151994!3d33.45421568077284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x78f648045e87cdac!2z5LiJ5Luj55uu6ZW35bGx57K-6IKJ5bqX!5e0!3m2!1sja!2sjp!4v1605870365755!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市産業通１１−２０３−１"}
        tel={"0894-35-6910"}
        time={"【平日】15：00～22：30【土日祝】11：30-22：30"}
        holiday={"年中無休"}
        card={"-"}
        seat={"-"}
        room={"有"}
        reserved={"-"}
        parking={"有"}
      />
    </>
  );
};

export default Nagayama;
