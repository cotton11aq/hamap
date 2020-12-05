import React from "react";
import logo from "../../img/logo/hamap-logo.png";
import { HashLink } from "react-router-hash-link";

const Header = (props) => {
  return (
    <>
      <div className="header">
        <div className="header-wrapper">
          <HashLink to="/#idtop">
            <div className="header-logo">
              <img src={logo} alt="logo" />
            </div>
          </HashLink>
          <div className="header-pc">
            <div className="header-li">
              <HashLink to="/#idsechead">
                <span>What's Hamap ?</span>
                <p>Hamap とは？</p>
              </HashLink>
            </div>
            <div className="header-li">
              <HashLink to="/#idinsta">
                <span>staff pick up</span>
                <p>インスタグラム</p>
              </HashLink>
            </div>
            <div className="header-li">
              <HashLink to="/#ideat">
                <span>Let's dat !</span>
                <p>ジャンルから探す</p>
              </HashLink>
            </div>
            <div className="header-li">
              <HashLink to="/#idgo">
                <span>Let's go !</span>
                <p>エリアから探す</p>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <div className="header-han">
        {/* <!-- ドロワーエリア --> */}
        <div className="header-drawer">
          <input
            className="header-drawer__checkbox"
            id="drawerCheckbox"
            type="checkbox"
          />
          {/* <!-- ドロワーアイコン --> */}
          <label className="header-drawer__icon" htmlFor="drawerCheckbox">
            <span className="header-drawer__icon-parts"></span>
          </label>
          {/* <!-- 背景を暗く --> */}
          <label
            className="header-drawer__overlay"
            htmlFor="drawerCheckbox"
          ></label>
          {/* <!-- ドロワーメニュー --> */}
          <nav className="header-drawer__menu">
            <div className="header-logo-han">
              <HashLink to="/#idtop">
                <img src={logo} alt="logo" />
              </HashLink>
            </div>
            <div className="header-title">
              <p>
                <HashLink to="/#idsechead">
                  What's Hamap ?<span> － Hamap とは？</span>
                </HashLink>
              </p>
            </div>
            <div className="header-title">
              <p>
                <HashLink to="/#idinsta-sp">
                  Staff pick up !<span> － インスタグラム</span>
                </HashLink>
              </p>
            </div>
            <div className="header-title">
              <p>
                <HashLink to="/#ideat-sp">
                  Let's eat !<span> － ジャンルで選ぶ</span>
                </HashLink>
              </p>
            </div>
            <div className="header-genre">
              <ul>
                <HashLink to="/Chanpon#idchanpon">
                  <li>ちゃんぽん</li>
                </HashLink>
                <HashLink to="/Kaisen#idkaisen">
                  <li>海鮮</li>
                </HashLink>
                <HashLink to="/Izakaya#idizakaya">
                  <li>居酒屋</li>
                </HashLink>
                <HashLink to="/Yakiniku#idyakiniku">
                  <li>焼肉</li>
                </HashLink>
                <HashLink to="/Menrui#idmenrui">
                  <li>麺類</li>
                </HashLink>
                <HashLink to="/Konamono#idkonamono">
                  <li>粉物</li>
                </HashLink>
                <HashLink to="/Cafe#idcafe">
                  <li>喫茶店</li>
                </HashLink>
              </ul>
            </div>
            <div className="header-title">
              <p>
                <HashLink to="/#idgo-sp">
                  Let's go !<span> － エリアで選ぶ</span>
                </HashLink>
              </p>
            </div>
            <div className="header-genre">
              <ul>
                <HashLink to="/Shotengai#idshotengai">
                  <li>商店街</li>
                </HashLink>
                <HashLink to="/Yawatahamaeki#idyawatahamaeki">
                  <li>八幡浜駅周辺</li>
                </HashLink>
                <HashLink to="/Minatto#idminatto">
                  <li>みなっと</li>
                </HashLink>
              </ul>
            </div>
            <div className="header-contact">
              <HashLink to="/#idtop">
                <p>トップページ</p>
              </HashLink>
              <a href="mailto:ka34a6hs5lvg@yahoo.co.jp">
                <p>お問い合わせ</p>
              </a>
            </div>
            <div className="header-sns">
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
          </nav>
        </div>
      </div>
      <div className="header-padding"></div>
    </>
  );
};

export default Header;
