import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Amarufi = () => {
  return (
    <>
      <div id="idamarufi"></div>
      <Header />
      <SideNav />
      <Shop
        title={"リストランテ アマルフィ"}
        titlesub={"地元の食材にこだわったモダンイタリアン"}
        classpic={"shop-pic shop-amarufi"}
        classicon={"shop-icon shop-cafe"}
        catch={"地元の食材にこだわったモダンイタリアン"}
        genre01={"イタリア料理レストラン"}
        genre02={"パスタ"}
        genre03={"ステーキ"}
        text={
          "「地産地消」をコンセプトに、地元・八幡浜の新鮮な食材を使い、最新の調理法で今まで味わったことのない美味しさを引き出すモダンイタリアン。イタリア2つ星レストランで修業を積んだ新進気鋭の若手シェフと、経験豊富なベテランソムリエとのコンビネーションも絶妙です。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.695807858276!2d132.42075361519946!3d33.45723088077197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x978f61d0ccae9fe5!2z44Ki44Oe44Or44OV44Kj!5e0!3m2!1sja!2sjp!4v1605916308192!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市昭和通1460–70"}
        tel={"0894-29-1188"}
        time={
          "【火～日】ランチタイム 11:00～15：00(L.O. 14:00） ディナータイム 17:30～22:00(L.O. 21:00）"
        }
        holiday={"月曜日（祝日の場合は翌日）"}
        card={"可（VISA、MASTER、JCB、AMEX、DC、ダイナース、その他）"}
        seat={"40席（座席40席）"}
        room={"有（4人可、6人可、8人可、10～20人可、20～30人可）"}
        reserved={"可（30人以上）"}
        parking={"有（23台）"}
      />
    </>
  );
};

export default Amarufi;
