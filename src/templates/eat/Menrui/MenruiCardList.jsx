import React from "react";
import dosanko from "../../../assets/img/shop/dosanko.jpg";
import inoue from "../../../assets/img/shop/inoue.jpg";
import { Card, GenreHeadTitle } from "../../../assets/components/index";

const KaisenCardList = (props) => {
  return (
    <>
      <div className="cardlist">
        <GenreHeadTitle logo={props.logo} title={props.title} />
        <Card
          img={dosanko}
          title={"どさん子ラーメン"}
          sub={"独自の進化を遂げたオリジナルメニューを堪能"}
          link={"/Dosanko/#iddosanko"}
        />
        <Card
          img={inoue}
          title={"いの上"}
          sub={"八幡浜で唯一蕎麦が食べられるお店"}
          link={"/Inoue/#idinoue"}
        />
      </div>
    </>
  );
};

export default KaisenCardList;
