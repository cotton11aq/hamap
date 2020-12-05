import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Rondon = () => {
  return (
    <>
      <div id="idrondon"></div>
      <Header />
      <SideNav />
      <Shop
        title={"ロンドン"}
        titlesub={"創業67年老舗の一品。"}
        classpic={"shop-pic shop-rondon"}
        classicon={"shop-icon shop-chanpon"}
        catch={"創業67年老舗の一品。"}
        genre01={"ちゃんぽん"}
        genre02={"定食"}
        genre03={"カレー"}
        text={
          "鶏ガラベースの中華そば風で、あっさりとした家庭的な味。お土産用のちゃんぽんもお持ち帰りできますので、ご利用くださいませ。また、うどん、定食、カレーなどバリエーション豊かなメニューをご用意しておりますので、一度お越しくださいませ。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6464630259943!2d132.42215401519957!3d33.458516180771525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f2737de8cce6b1e!2zKOaciSnjg63jg7Pjg4njg7PmnKzlupc!5e0!3m2!1sja!2sjp!4v1605615239619!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市新町１４６６"}
        tel={"0894-22-1234"}
        time={"11：00〜21：00"}
        holiday={"水曜日・毎月8日"}
        card={"不"}
        seat={"38席（座席28席、テーブル10席）"}
        room={"無"}
        reserved={"可（20人～50人）"}
        parking={"有（3台）"}
      />
    </>
  );
};

export default Rondon;
