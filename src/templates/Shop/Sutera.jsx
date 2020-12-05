import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Sutera = () => {
  return (
    <>
      <div id="idsutera"></div>
      <Header />
      <SideNav />
      <Shop
        title={"カフェ・ド・ステラ"}
        titlesub={"数少ない、無添加手作り焼き菓子とコーヒーが楽しめるお店"}
        classpic={"shop-pic shop-sutera"}
        classicon={"shop-icon shop-cafe"}
        catch={"数少ない、無添加手作り焼き菓子とコーヒーが楽しめるお店"}
        genre01={"喫茶・カフェ"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "カフェ・ド・ステラでは素材からこだわり、100％無添加の焼き菓子をお楽しみいただけます。モーニングから、ランチまで幅広いメニュー展開も魅力的です。また、無添加の手作り弁当・オードブルのご注文も承っておりますので、一度ご相談ください。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.745454294302!2d132.4296303151995!3d33.45593768077241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x721cf5c78aca96de!2z44Kr44OV44Kn44O744OJ44O744K544OG44Op!5e0!3m2!1sja!2sjp!4v1605912460677!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市産業通2-19"}
        tel={"090-4472-0149"}
        time={"8:00～18:00"}
        holiday={"日曜日(不定休)"}
        card={"不"}
        seat={"15席"}
        room={"無"}
        reserved={"可（要相談）"}
        parking={"3台"}
      />
    </>
  );
};

export default Sutera;
