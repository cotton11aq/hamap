import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Ikedaya = () => {
  return (
    <>
      <div id="idikedaya"></div>
      <Header />
      <SideNav />
      <Shop
        title={"池田屋"}
        titlesub={"焼肉＆鍋、お好きなスタイルでお肉を堪能"}
        classpic={"shop-pic shop-ikedaya"}
        classicon={"shop-icon shop-izakaya"}
        catch={"焼肉＆鍋、お好きなスタイルでお肉を堪能"}
        genre01={"焼肉"}
        genre02={"居酒屋"}
        genre03={"鍋"}
        text={
          "2月9日よりリニューアルオープンしました池田屋。こちらのお店ではお好きなスタイルで豊富な種類のお肉を楽しめます。すき焼きや、すき焼き、豚しゃぶ、ホルモン焼きを好きなだけ食べれる食べ放題メニューもご用意しております。また＋1500円で飲み放題もお付けできますのでご検討くださいませ。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6728107093854!2d132.42492389999998!3d33.4578299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x839197d0020adc06!2z5rGg55Sw5bGL!5e0!3m2!1sja!2sjp!4v1605786309351!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市字新町4-281-1"}
        tel={"050-5593-8079"}
        time={"【火～土】18:00～3:00、【日】18:00～23:00"}
        holiday={"日曜日"}
        card={"可（VISA、MASTER、JCB）"}
        seat={"34席"}
        room={"有（2人可、4人可、6人可、8人可、10～20人可、20～30人可）"}
        reserved={"可"}
        parking={"無（最寄りの駐車場：中央駐車場）"}
      />
    </>
  );
};

export default Ikedaya;
