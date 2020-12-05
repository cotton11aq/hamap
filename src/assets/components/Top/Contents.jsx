import React from "react";
import mapsp from "../../img/map/sp_map.png";
import mappc from "../../img/map/pc_map.png";

const Contents = () => {
  return (
    <>
      <div className="topcontents">
        <div className="topcontents-title">
          <h2>八幡浜とは？</h2>
        </div>
        <div className="topcontents-text topcontents-text01">
          <p>
            愛媛県西端にある佐田岬半島の付け根に位置するまち、八幡浜市。北に伊予灘、西に宇和海を望み、丘陵地が多くあります。
            <br />
            海はリアス式海岸が続き、温暖な気候で包まれている八幡浜について、グルメの前に少しのぞいてみましょう！
          </p>
        </div>
        <div className="topcontents-title02">
          <h3>四国の西の玄関口</h3>
        </div>
        <div className="topcontents-text topcontents-text02">
          <p>
            愛媛県西端にある佐田岬半島の付け根に位置するまち、八幡浜市。北に伊予灘、西に宇和海を望み、丘陵地が多くあります。
            <br />
            海はリアス式海岸が続き、温暖な気候で包まれている八幡浜について、グルメの前に少しのぞいてみましょう！
          </p>
        </div>
        <div className="topcontents-sub">
          <p className="topcontents-num">
            32,896<span>人</span>
          </p>
          <span>穏やかに暮らせるコンパクトなまち</span>
        </div>
        <div className="topcontents-sub">
          <p className="topcontents-num">
            200<span>種類以上</span>
          </p>
          <span>年間に水揚げされる魚の種類</span>
        </div>
        <div className="topcontents-map topcontents-map-sp">
          <img src={mapsp} alt="map" />
        </div>
        <div className="topcontents-map topcontents-map-pc">
          <img src={mappc} alt="map" />
        </div>
      </div>
    </>
  );
};

export default Contents;
