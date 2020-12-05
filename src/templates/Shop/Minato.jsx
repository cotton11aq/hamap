import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Minato = () => {
  return (
    <>
      <div id="idminato"></div>
      <Header />
      <SideNav />
      <Shop
        title={"みなと"}
        titlesub={"八幡浜で〆といえば「みなと」"}
        classpic={"shop-pic shop-minato"}
        classicon={"shop-icon shop-chanpon"}
        catch={"八幡浜で〆といえば「みなと」"}
        genre01={"ちゃんぽん"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "商店街の入り口にある、昔ながらの雰囲気を漂わせるお店。〆の定番である、お茶漬け、ぞうすい、ちゃんぽんなど豊富なメニューをご用意しております。どこか落ち着く店内とやさしい味の料理が、そっと一日の終わりを教えてくれる気がします。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.686789776643!2d132.4222784151995!3d33.45746578077194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8d78ff1ddbef5fde!2z5b6h6aOf5LqL5YemIOOBv-OBquOBqA!5e0!3m2!1sja!2sjp!4v1605614258120!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市矢野町１４"}
        tel={"0894-22-2377"}
        time={"18:00～3:00（L.O.2:30）"}
        holiday={"月曜日"}
        card={"不"}
        seat={"20席"}
        room={"無"}
        reserved={"※可（時間による）"}
        parking={"無（最寄りの駐車場：新町角駐車場）"}
      />
    </>
  );
};

export default Minato;
