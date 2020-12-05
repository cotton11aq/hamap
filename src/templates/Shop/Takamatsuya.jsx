import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Takamatsuya = () => {
  return (
    <>
      <div id="idtakamatsuya"></div>
      <Header />
      <SideNav />
      <Shop
        title={"高松屋"}
        titlesub={"モダンな雰囲気のお寿司屋＆海鮮居酒屋さん"}
        classpic={"shop-pic shop-takamatsuya"}
        classicon={"shop-icon shop-kaisen"}
        catch={
          "オーナーさんはレイザーラモンRGさんのお友達!?モダンな雰囲気のお寿司屋＆海鮮居酒屋さん"
        }
        genre01={"寿司"}
        genre02={"魚介料理・海鮮料理"}
        genre03={"shop-none"}
        text={
          "八幡浜市役所の目の前にあります高松屋。3年前に改装し、赤と黒を基調としたモダンな内装となっており、デートや女子会など、おしゃれにお寿司をお楽しみいただけます。料理はにぎりや天ぷら、赤だし、地酒などが楽しめ、季節や仕入れによってメニューが変わるため、いつ来てもお客様を飽きさせることがありません。オーナーさんはレイザーラモンRGさんのお友達だとか...貴重なお話を聞けるかもしれません！"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.5038784147773!2d132.42147341519964!3d33.46222988077047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x745bb26ef5afd399!2z6auY5p2-5bGLIOaagQ!5e0!3m2!1sja!2sjp!4v1605736044247!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市旧港４３２"}
        tel={"0894-22-0157"}
        time={"17:30～22:00（L.O.21:30）"}
        holiday={"日曜日"}
        card={"不"}
        seat={"51席（カウンター9席、テーブル12席、2階：30人収容可）"}
        room={"有（30人、4人×3）"}
        reserved={"可"}
        parking={"有（5台）"}
      />
    </>
  );
};

export default Takamatsuya;
