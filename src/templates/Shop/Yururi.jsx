import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Yururi = () => {
  return (
    <>
      <div id="idyururi"></div>
      <Header />
      <SideNav />
      <Shop
        title={"ゆるり"}
        titlesub={"全室、完全個室で「ゆる～り」と"}
        classpic={"shop-pic shop-yururi"}
        classicon={"shop-icon shop-izakaya"}
        catch={"全室、完全個室で「ゆる～り」と"}
        genre01={"居酒屋"}
        genre02={"shop-none"}
        genre03={"shop-none"}
        text={
          "くいもんや305の姉妹店「ゆるり」。くいもんや305（さわごー）とはちょっと雰囲気の違う、隠れ家的なお店。野菜たっぷりのおしゃれでヘルシーな料理が多いため女子会などにオススメ！店舗裏の新川駐車場は夜間（20～7時）は無料です。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.705386389452!2d132.42432321519968!3d33.456981380772106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabd62f6c88934343!2z5omL44GX44GU44Go5paZ55CG5bGLIOOChuOCi-OCig!5e0!3m2!1sja!2sjp!4v1605822403936!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市下浜田町1377-1"}
        tel={"0894-22-1678"}
        time={"17：30～23：15"}
        holiday={"日曜日"}
        card={"不"}
        seat={"42席（テーブル42席）"}
        room={"有"}
        reserved={"※不（16～20人の個室有）"}
        parking={"無（最寄りの駐車場：新川駐車場 1時間サービス）"}
      />
    </>
  );
};

export default Yururi;
