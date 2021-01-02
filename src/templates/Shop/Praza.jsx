import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Praza = () => {
  return (
    <>
      <div id="idpraza"></div>
      <Header />
      <SideNav />
      <Shop
        title={"ハーバープラザホテル"}
        titlesub={"1００人単位の宴会も可能。"}
        classpic={"shop-pic shop-praza"}
        classicon={"shop-icon shop-chanpon"}
        catch={"1００人単位の宴会も可能。大人数でお探しならココ"}
        genre01={"ご宴会"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "商店街に面したホテル「ハーバー」。予算と人数に合わせた宴会が開催できます。また、プロジェクターやオーディオ機器なども揃っているため、ちょっとした出し物もできちゃいます。目の前にはカラオケ遊遊、遠方の方はそのままチェックインなどアクセスが良いのも嬉しいところ。"
        }
        introduce={"introduce"}
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.5792787242885!2d132.42152771519957!3d33.46026608077117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5473d733286a8ff!2z44OP44O844OQ44O844OX44Op44K244Ob44OG44Or!5e0!3m2!1sja!2sjp!4v1605567952221!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市仲之町"}
        tel={"0894-23-0007"}
        time={"-"}
        holiday={"年中無休"}
        card={"可"}
        seat={"飛天の間：立食450名、飛鳳の間：立食170名"}
        room={"有"}
        reserved={"可"}
        parking={"有"}
      />
    </>
  );
};

export default Praza;
