import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Seike = () => {
  return (
    <>
      <div id="idseike"></div>
      <Header />
      <SideNav />
      <Shop
        title={"清家食堂"}
        titlesub={"創業明治３０年の老舗食堂"}
        classpic={"shop-pic shop-seike"}
        classicon={"shop-icon shop-chanpon"}
        catch={"創業明治３０年の老舗食堂"}
        genre01={"ちゃんぽん"}
        genre02={"定食・食堂"}
        genre03={"shop-none"}
        text={
          "醤油ベースに鶏ガラ・カツオが利いたあっさり目のスープが特徴。また、野菜をはじめ、練り物もたくさん入っており、満足できる一品です。チャンポン以外にも、うどん、焼そば、焼めし、カレーライス、チキンライス、オムライス、カツ丼や親子丼などの丼物のラインアップも充実した まさに正しき食堂。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.539148646058!2d132.4208488151995!3d33.46131128077086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x965a5b4808eb0c0b!2z5riF5a626aOf5aCC!5e0!3m2!1sja!2sjp!4v1605615471267!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市新港４３５"}
        tel={"0894-24-0604"}
        time={"7：00～18：00"}
        holiday={"不定休"}
        card={"不"}
        seat={"24席"}
        room={"無"}
        reserved={"不"}
        parking={"無（最寄りの駐車場：商工会議所駐車場 ）"}
      />
    </>
  );
};

export default Seike;
