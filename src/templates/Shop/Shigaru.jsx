import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Shigaru = () => {
  return (
    <>
      <div id="idshigaru"></div>
      <Header />
      <SideNav />
      <Shop
        title={"シーガル"}
        titlesub={"みなと町を眼下に、豪華海鮮丼はいかがですか？"}
        classpic={"shop-pic shop-shigaru"}
        classicon={"shop-icon shop-kaisen"}
        catch={"みなと町を眼下に、豪華海鮮丼はいかがですか？"}
        genre01={"ちゃんぽん"}
        genre02={"喫茶店"}
        genre03={"海鮮料理"}
        text={
          "ハーバープラザ１階にありますティーラウンジシーガル。こちらのお店ではお刺身定食や海鮮丼ランチ、ちゃんぽんが食べられます。プリプリの生エビを中心に、鯛、イカ、カンパチ、タコ、イクラが贅沢に盛られています。また、隠れメニューの“焼き”ちゃんぽんもオススメ！炒め野菜や練り物はそのままですが、スープがありません！そんな珍しい八幡浜ちゃんぽんを一度食べてみてください。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.5792787242885!2d132.42152771519957!3d33.46026608077117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5473d733286a8ff!2z44OP44O844OQ44O844OX44Op44K244Ob44OG44Or!5e0!3m2!1sja!2sjp!4v1605734755863!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市仲之町360-1ハーバープラザホテル1F"}
        tel={"0894-22-0022"}
        time={
          "7：00〜10：00（朝食）、11：00〜14：00（ランチ）、10：00〜20：00（カフェ）"
        }
        holiday={"年中無休（正月・盆）"}
        card={"可"}
        seat={"30席"}
        room={"無"}
        reserved={"要問合せ"}
        parking={"有"}
      />
    </>
  );
};

export default Shigaru;
