import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import img01 from "../../../assets/img/swiper/sp_top_image_1.png";
import img02 from "../../../assets/img/swiper/sp_top_image_2.png";
import img03 from "../../../assets/img/swiper/sp_top_image_3.png";
import img04 from "../../../assets/img/swiper/sp_top_image_4.png";
import img05 from "../../../assets/img/swiper/sp_top_image_5.png";

const ImageSwiper = () => {
  const [params] = useState({
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    loop: true,
  });

  return (
    <Swiper {...params}>
      <div className="swiper">
        <img src={img01} alt="picture01" />
      </div>
      <div className="swiper">
        <img src={img02} alt="picture02" />
      </div>
      <div className="swiper">
        <img src={img03} alt="picture03" />
      </div>
      <div className="swiper">
        <img src={img04} alt="picture04" />
      </div>
      <div className="swiper">
        <img src={img05} alt="picture05" />
      </div>
    </Swiper>
  );
};

export default ImageSwiper;
