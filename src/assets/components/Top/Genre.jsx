import React from "react";
import chanpon from "../../img/icon/black/black_chanpon.png";
import kaisen from "../../img/icon/black/black_kaisen.png";
import izakaya from "../../img/icon/black/black_izakaya.png";
import yakiniku from "../../img/icon/black/black_yakiniku.png";
import menrui from "../../img/icon/black/black_menrui.png";
import konamono from "../../img/icon/black/black_konamono.png";
import cafe from "../../img/icon/black/black_cafe.png";
import yawatahama_gurume from "../../img/icon/yawatahama_gurume.png";
import { IconCard } from "../index";

const Genre = () => {
  return (
    <>
      <div className="genre">
        <div className="genre-gray">
          <div className="genre-cards">
            <div className="genre-card">
              <div className="genre-wrapper">
                <div className="genre-container">
                  <div className="genre-icontop">
                    <img src={yawatahama_gurume} alt="yawatahama" />
                  </div>
                </div>
              </div>
            </div>
            <IconCard
              link={"/Chanpon/#idchanpon"}
              img={chanpon}
              title={"ちゃんぽん"}
              sub={"Chanpon"}
            />
            <IconCard
              link={"/Kaisen/#idkaisen"}
              img={kaisen}
              title={"海鮮"}
              sub={"Kaisen"}
            />
            <IconCard
              link={"/Izakaya/#idizakaya"}
              img={izakaya}
              title={"居酒屋"}
              sub={"Izakaya"}
            />
            <IconCard
              link={"/Yakiniku#idyakiniku"}
              img={yakiniku}
              title={"焼肉"}
              sub={"Yakiniku"}
            />
            <IconCard
              link={"/Menrui#idmenrui"}
              img={menrui}
              title={"麺類"}
              sub={"Menrui"}
            />
            <IconCard
              link={"/Konamono#idkonamono"}
              img={konamono}
              title={"粉物"}
              sub={"Konamono"}
            />
            <IconCard
              link={"/Cafe#idcafe"}
              img={cafe}
              title={"喫茶店"}
              sub={"Cafe"}
              className={"genre-title-none"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Genre;
