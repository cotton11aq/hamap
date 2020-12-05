import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Ayacho = () => {
  return (
    <>
      <div id="idayacho"></div>
      <Header />
      <SideNav />
      <Shop
        title={"炭火焼鳥 彩鳥"}
        titlesub={"デートにも利用いただける、モダンな焼き鳥屋さん"}
        classpic={"shop-pic shop-ayacho"}
        classicon={"shop-icon shop-izakaya"}
        catch={"デートにも利用いただける、モダンな焼き鳥屋さん"}
        genre01={"居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "商店街の入り口から少し歩いたところにあります炭火焼鳥「彩鳥」。おしゃれな雰囲気の中、ガラスで仕切られたカウンターの向こうでは炭火で串物が調理されています。焼き鳥だけでなく、地鶏のたたき、刺身、ホルモンの鉄板焼きなどございますので、舌を飽きさせることがありません。焼き鳥、鍋、魚刺身コースなど各種コースございますのでご利用ください。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.680908222!2d132.4235621151996!3d33.457618980771755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x185faed9b0513fd1!2z54Kt54Gr54S86bOl5b2p6bOlIElST0RPUkk!5e0!3m2!1sja!2sjp!4v1605787493948!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市矢野町３６−１"}
        tel={"0894-24-6683"}
        time={"17:30～23:00"}
        holiday={"不定休"}
        card={"-"}
        seat={"-"}
        room={"-"}
        reserved={"-"}
        parking={"-"}
      />
    </>
  );
};

export default Ayacho;
