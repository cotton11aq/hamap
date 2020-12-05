import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Inoue = () => {
  return (
    <>
      <div id="idInoue"></div>
      <Header />
      <SideNav />
      <Shop
        title={"いの上"}
        titlesub={"八幡浜で唯一蕎麦が食べられるお店"}
        classpic={"shop-pic shop-inoue"}
        classicon={"shop-icon shop-menrui"}
        catch={"蕎麦が無くなり次第終了！！八幡浜で唯一蕎麦が食べられるお店"}
        genre01={"蕎麦"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "八幡浜市立病院の近くにあります手打ち蕎麦専門店「いの上」。店内は木材を多く使用し、落ち着いた雰囲気でお食事ができます。800円前後の温冷あわせて15種類ほどのメニューがあります。そば打ち体験もございますので一度ご相談ください。手打ち蕎麦のため数量限定となっております。お早めにどうぞ。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.281467346459!2d132.42347731519976!3d33.46802198076889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8eccea4a5b48db5b!2z44GE44Gu5LiK!5e0!3m2!1sja!2sjp!4v1605783210216!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市大平1-647-1"}
        tel={"0894-35-7255"}
        time={"11:30～蕎麦が無くなり次第終了"}
        holiday={"火曜日、第2水曜日"}
        card={"不"}
        seat={"-"}
        room={"有"}
        reserved={"無"}
        parking={"有"}
      />
    </>
  );
};

export default Inoue;
