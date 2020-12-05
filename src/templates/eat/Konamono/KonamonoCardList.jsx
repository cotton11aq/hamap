import React from "react";
import miyachan from "../../../assets/img/shop/miyachan.jpg";
import { Card, GenreHeadTitle } from "../../../assets/components/index";

const KonamonoCardList = (props) => {
  return (
    <>
      <div className="cardlist">
        <GenreHeadTitle logo={props.logo} title={props.title} />
        <Card
          img={miyachan}
          title={"たこ焼 みやちゃん"}
          sub={"たこ焼き・かき氷、ふらっと立ち寄れるたこ焼き屋さん"}
          link={"/Miyachan/#idmiyachan"}
        />
      </div>
    </>
  );
};

export default KonamonoCardList;
