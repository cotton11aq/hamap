import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Ichidai = () => {
  return (
    <>
      <div id="idichidai"></div>
      <Header />
      <SideNav />
      <Shop
        title={"笑話酒場 いちだい"}
        titlesub={"深夜3時まで元気に営業中‼"}
        classpic={"shop-pic shop-ichidai"}
        classicon={"shop-icon shop-izakaya"}
        catch={
          "飲んで笑って話して♬そんな楽しい居酒屋『笑話酒場 いちだい』深夜3時まで元気に営業中‼"
        }
        genre01={"居酒屋"}
        genre02={"鉄板焼き"}
        genre03={"創作料理"}
        text={
          "八幡浜港（道の駅 みなっと）より徒歩10分！コスパも最高の『笑話酒場いちだい』で各種宴会ご予約お持ちしております‼昭和レトロな雰囲気で一人でも気軽に入りやすく親しみのある居酒屋です！忘・新年会・歓送迎会・女子会などなど。またご家族の集まりや、一人呑みまで、とにかく楽しく過ごしたい方は集合！"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6831349230297!2d132.42372651519963!3d33.457560980771895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb181dd74e30eff5e!2z56yR6Kmx6YWS5aC044GE44Gh44Gg44GE!5e0!3m2!1sja!2sjp!4v1605820107053!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市14 丸二ビル 1F"}
        tel={"050-5594-778"}
        time={"19：00～27：00"}
        holiday={"木曜日"}
        card={"不"}
        seat={"22席"}
        room={"無"}
        reserved={"可（20人以下可）"}
        parking={"無（最寄りの駐車場：新川駐車場）"}
      />
    </>
  );
};

export default Ichidai;
