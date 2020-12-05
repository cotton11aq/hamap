import React from "react";
import { GoPic } from "../index";
import shotengai from "../../img/go/white_shotengai.png";
import yawatahamaeki from "../../img/go/white_yawatahamaeki.png";
import minatto from "../../img/go/white_minatto.png";

const GoGenre = () => {
  return (
    <>
      <div className="gogenre">
        <div className="gogenre-pic">
          <GoPic
            link={"/Shotengai#idshotengai"}
            className={"gogenre-banner gogenre-bg-zoom gogenre-bg-zoom01"}
            name={"商店街"}
            namesub={"Shotengai"}
            icon={shotengai}
          />
          <GoPic
            link={"/Yawatahamaeki#idyawatahamaeki"}
            className={"gogenre-banner gogenre-bg-zoom gogenre-bg-zoom02"}
            name={"八幡浜駅周辺"}
            namesub={"Yawatahamaeki"}
            icon={yawatahamaeki}
          />
          <GoPic
            link={"/Minatto#idminatto"}
            className={"gogenre-banner gogenre-bg-zoom gogenre-bg-zoom03"}
            name={"みなっと"}
            namesub={"Minatto"}
            icon={minatto}
          />
        </div>
      </div>
    </>
  );
};

export default GoGenre;
