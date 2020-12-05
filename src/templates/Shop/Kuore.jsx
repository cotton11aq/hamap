import React from "react";
import { Header, Shop, SideNav } from "../../assets/components/index";

const Kuore = () => {
  return (
    <>
      <div id="idkuore"></div>
      <Header />
      <SideNav />
      <Shop
        title={"クオーレ"}
        titlesub={"新発見！トマト使用の赤いちゃんぽん！"}
        classpic={"shop-pic shop-kuore"}
        classicon={"shop-icon shop-chanpon"}
        catch={"新発見！トマト使用の赤いちゃんぽん！"}
        genre01={"居酒屋"}
        genre02={"ちゃんぽん"}
        genre03={"イタリアン"}
        text={
          "イタリアンメニューを中心としたお店ということもあり、鶏ガラスープにトマトとオリーブオイル、チーズをプラス！他とは違ったスープパスタのようなちゃんぽんが食べられます。"
        }
        map={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4885.159067697867!2d132.42995498014886!3d33.45552182889016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6910a10c8382af05!2z44Kr44OV44KnIOOCr-OCquODvOODrA!5e0!3m2!1sja!2sjp!4v1605566182936!5m2!1sja!2sjp"
        }
        address={"愛媛県八幡浜市広瀬2-1-2"}
        tel={"0894-24-6252"}
        time={"11:30～14:00、17:30～22:00"}
        holiday={"日曜日"}
        card={"不"}
        seat={"15席（カウンター4席、テーブル11席）"}
        room={"無"}
        reserved={"可"}
        parking={"無（最寄りの駐車場：新川駐車場）"}
      />
    </>
  );
};

export default Kuore;
