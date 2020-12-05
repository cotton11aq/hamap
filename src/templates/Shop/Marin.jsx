import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Marin = () => {
  return (
    <>
      <div id="idmarin"></div>
      <Header />
      <SideNav />
      <Shop
        title={"レストラン マリン"}
        titlesub={"宇和海を眺めながら味わう一品"}
        classpic={"shop-pic shop-marin"}
        classicon={"shop-icon shop-chanpon"}
        catch={"宇和海を眺めながら味わう一品"}
        genre01={"海鮮ちゃんぽん"}
        genre02={"じゃこ天うどん"}
        genre03={"じゃこかつ定食"}
        text={
          "鶏ガラと豚骨ベースのスープに、野菜の旨味を加えた中華ベースのあっさりスープが自慢の一品。エビやイカなどの海鮮、特産品のじゃこ天やかまぼこを加えたトッピングも嬉しい。フェリー乗り場のビルにあり、早朝からオープンしているのでオススメ。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6830734968376!2d132.41533991519958!3d33.45756258077195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x180e8f084ca63b3e!2z5Zar6Iy2IOODrOOCueODiOODqeODsyDjg57jg6rjg7M!5e0!3m2!1sja!2sjp!4v1605613343049!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市 沖新田 1586 観光センタービル３F"}
        tel={"0864-23-2600"}
        time={"8：20〜19：30（ラストオーダー19:00）"}
        holiday={"元旦"}
        card={"不"}
        seat={"150席"}
        room={"無"}
        reserved={"可"}
        parking={"無（最寄り：新町角駐車場）"}
      />
    </>
  );
};

export default Marin;
