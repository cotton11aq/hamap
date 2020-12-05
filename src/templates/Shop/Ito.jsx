import React from 'react';
import { Header, Shop, SideNav } from '../../assets/components/index';

const Ito = () => {
  return (
    <>
      <div id="idito"></div>
      <Header />
      <SideNav />
      <Shop title={'八幡浜センチュリーホテルイトー'} titlesub={'宇和海を眺めながら味わうちゃんぽん'} classpic={"shop-pic shop-ito"} classicon={"shop-icon shop-chanpon"} catch={'最上階から宇和海を眺めながら味わうちゃんぽん'} genre01={'居酒屋'} genre02={'ちゃんぽん'} genre03={'イタリアン'} text={'八幡浜センチュリーホテルイトー7階にある「司」。宇和海に臨む展望と、ウッド調の空間の中で、新鮮な素材を使用したちゃんぽんを堪能しよう。ウチワエビが入った濱ちゃんぽんはボリューム満点です。'} map={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6529589947786!2d132.4209693151994!3d33.45834698077158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc6ce665ca56f53ec!2z5YWr5bmh5rWc44K744Oz44OB44Ol44Oq44O844Ob44OG44Or44Kk44OI44O8!5e0!3m2!1sja!2sjp!4v1605567491035!5m2!1sja!2sjp"} address={'愛媛県八幡浜市天神通１−１４６０−７'} tel={'0894-22-2200'} time={'11：30〜14：00、18：00～21：30（ラストオーダー14:00、21:00）'} holiday={'第１・３日曜日、月曜日'} card={'可'} seat={'40席'} room={'無'} reserved={'可（25名様以上）'} parking={'有（14台）'} />
    </>
  )
}

export default Ito