import React from "react";
import { EatPic } from "../index";
import chanpon from "../../img/eat/icon/white_chanpon.png";
import kaisen from "../../img/eat/icon/white_kaisen.png";
import izakaya from "../../img/eat/icon/white_izakaya.png";
import yakiniku from "../../img/eat/icon/white_yakiniku.png";
import menrui from "../../img/eat/icon/white_menrui.png";
import konamono from "../../img/eat/icon/white_konamono.png";
import cafe from "../../img/eat/icon/white_cafe.png";

const EatGenre = () => {
  return (
    <>
      <div className="eatgenre">
        <div className="eatgenre-pic">
          <div className="eatgenre-wrapper">
            <EatPic
              link={"/Chanpon#idchanpon"}
              className={"eatgenre-banner eatgenre-bg-zoom eatgenre-bg-zoom01"}
              name={"ちゃんぽん"}
              namesub={"Chanpon"}
              icon={chanpon}
            />
            <EatPic
              link={"/Kaisen/#idkaisen"}
              className={"eatgenre-banner eatgenre-bg-zoom eatgenre-bg-zoom02"}
              name={"海鮮"}
              namesub={"Kaisen"}
              icon={kaisen}
            />
            <EatPic
              link={"/Izakaya/#idizakaya"}
              className={"eatgenre-banner eatgenre-bg-zoom eatgenre-bg-zoom03"}
              name={"居酒屋"}
              namesub={"Izakaya"}
              icon={izakaya}
            />
            <EatPic
              link={"/Yakiniku/#idyakiniku"}
              className={"eatgenre-banner eatgenre-bg-zoom eatgenre-bg-zoom04"}
              name={"焼肉"}
              namesub={"Yakiniku"}
              icon={yakiniku}
            />
          </div>
          <div className="eatgenre-wrapper">
            <EatPic
              link={"/Menrui/#idmenrui"}
              className={"eatgenre-banner eatgenre-bg-zoom eatgenre-bg-zoom05"}
              name={"麺類"}
              namesub={"Menrui"}
              icon={menrui}
            />
            <EatPic
              link={"/Konamono/#idkonamono"}
              className={"eatgenre-banner eatgenre-bg-zoom eatgenre-bg-zoom06"}
              name={"粉物"}
              namesub={"Konamono"}
              icon={konamono}
            />
            <EatPic
              link={"/Cafe/#idcafe"}
              className={"eatgenre-banner eatgenre-bg-zoom eatgenre-bg-zoom07"}
              name={"喫茶店"}
              namesub={"Cafe"}
              icon={cafe}
            />
          </div>
        </div>
        <div className="eatgenre-bottom" id="idgo"></div>
      </div>
    </>
  );
};

export default EatGenre;
