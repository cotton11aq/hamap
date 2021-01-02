import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Kitahama = () => {
  return (
    <>
      <div id="idkitahama"></div>
      <Header />
      <SideNav />
      <Shop
        title={"北浜大島屋"}
        titlesub={"一級品のみを使用したコース料理は絶品"}
        classpic={"shop-pic shop-kitahama"}
        classicon={"shop-icon shop-kaisen"}
        catch={"35年間変わらない品質！一級品のみを使用したコース料理は絶品"}
        genre01={"ふぐ料理"}
        genre02={"あじ料理"}
        genre03={"shop-none"}
        text={
          "宇和海で捕れる活きとらふぐを使用した天然フグコースと、5月～10月限定の天然アジを使用した料理がオススメ。どちらも都内高級店に負けない味わいです。"
        }
        introduce={"introduce"}
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.524608322335!2d132.42131931519955!3d33.461689980770764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8e9e80aa870bd54c!2z5YyX5rWcIOWkp-WztuWxiw!5e0!3m2!1sja!2sjp!4v1605654402735!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市港町418"}
        tel={"0894-24-0051"}
        time={"17:00～22:00"}
        holiday={"年中無休（正月・盆）"}
        card={"可（※手数料6％）"}
        seat={"20席（座席5席）"}
        room={"無"}
        reserved={"-"}
        parking={"有（2台）"}
      />
    </>
  );
};

export default Kitahama;
