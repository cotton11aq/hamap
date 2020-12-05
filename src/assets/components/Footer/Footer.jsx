import React from "react";
import logo from "../../img/logo/hamap-logo-footer.png";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-head">
            <div className="footer-logo">
              <HashLink to={"/#top"}>
                <img src={logo} alt="logo" />
              </HashLink>
            </div>
            <div className="footer-sub">
              <p>
                Hamapは、愛媛県八幡浜市の美味しいをご紹介する、
                <br />
                地域活性化を目的としたグルメガイドです。
              </p>
            </div>
          </div>
          <div className="footer-search">
            <p>ジャンルで探す</p>
            <div className="footer-genre">
              <ul>
                <li>
                  <HashLink to={"/Chanpon#idchanpon"}>ちゃんぽん</HashLink>
                </li>
                <li>
                  <HashLink to={"/Kaisen#idkaisen"}>海鮮</HashLink>
                </li>
                <li>
                  <HashLink to={"/Izakaya#idizakaya"}>居酒屋</HashLink>
                </li>
                <li>
                  <HashLink to={"/Yakiniku#idyakiniku"}>焼肉</HashLink>
                </li>
                <li>
                  <HashLink to={"/Menrui#idmenrui"}>麺類</HashLink>
                </li>
                <li>
                  <HashLink to={"/Konamono#idkonamono"}>粉物</HashLink>
                </li>
                <li>
                  <HashLink to={"/Cafe#idcafe"}>喫茶店</HashLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-search">
            <p>エリアで探す</p>
            <div className="footer-genre footer-erea">
              <ul>
                <li>
                  <HashLink to={"/Shotengai#idshotengai"}>商店街</HashLink>
                </li>
                <li>
                  <HashLink to={"/Yawatahamaeki#idyawatahamaeki"}>
                    八幡浜駅周辺
                  </HashLink>
                </li>
                <li>
                  <HashLink to={"/Minatto#idminatto"}>みなっと</HashLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-flex">
            <div className="footer-contact">
              <p>
                <HashLink to={"/#idsechead"}>Hamap とは？</HashLink>
              </p>
              <p>
                <a href="mailto:ka34a6hs5lvg@yahoo.co.jp">お問い合わせ</a>
              </p>
            </div>
            <div className="footer-sns">
              <a
                href="https://twitter.com/intent/tweet?text=ツーリングで四国一周の旅へ出かけよう！四国ツーリング&url=https://shikoku-touring.net"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Share<i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/hamap_gourmet/" target="brank">
                Follow<i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="footer-copy">
            <p>©️ Hamap All Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
