import React from "react";
import menu from "../../img/shop/list/shop_menu.png";
import card from "../../img/shop/list/shop_card.png";
import rest from "../../img/shop/list/shop_rest.png";
import time from "../../img/shop/list/shop_time.png";

const Shop = (props) => {
  return (
    <>
      <div className="shop">
        <div className="shop-wrapper">
          <div className="shop-head">
            <h3>{props.title}</h3>
            <p>{props.titlesub}</p>
          </div>
          <div className="shop-aspect">
            <div className={props.classpic}>
              <div className={props.classicon}></div>
            </div>
          </div>
          <div className="shop-container">
            <div className="shop-head-flex">
              <div className="shop-head-flex01">
                <div className="shop-sub">
                  <p>{props.catch}</p>
                  <p>
                    <span>{props.genre01}</span>
                    <span className={props.genre02}>{props.genre02}</span>
                    <span className={props.genre03}>{props.genre03}</span>
                  </p>
                </div>
                <div className="shop-text">
                  <p>{props.text}</p>
                  <div id="introduce-none" className={props.introduce}>
                    <p>
                      「えひめ技あり鱧プロジェクト」様から写真をご提供いただきました！
                    </p>
                    <p>
                      （URL：
                      <a href="https://ehimewazahamo.jp" target="_brank">
                        https://ehimewazahamo.jp
                      </a>
                      ）
                    </p>
                    <div className="introduce-space"></div>
                    <p>
                      「えひめ技あり鱧プロジェクト」は、八幡浜市が多くの水揚げ量を誇る鱧（ハモ）の豊かな味わいをたくさん方にご体感いただくためのプロジェクトです。骨切りせず身を取る新たな技法を活用しており、食での地域活性化に取り組んでいます！
                    </p>
                    <div className="introduce-space"></div>
                    <p>
                      <a
                        href="https://www.instagram.com/ehimewazahamo/?hl=ja"
                        target="_brank"
                      >
                        #えひめ技あり鱧プロジェクト
                      </a>
                      の応援をよろしくお願いします！
                    </p>
                  </div>
                  <div id="introduce-none" className={props.introduce02}>
                    <p>
                      「
                      <a
                        href="https://www.instagram.com/chabos_pov/"
                        target="_brank"
                      >
                        @chabos_pov
                      </a>
                      」様から写真をご提供いただきました！
                    </p>
                  </div>
                </div>
              </div>
              <div className="shop-head-flex02">
                <div className="shop-info">
                  <div className="shop-map">
                    <iframe src={props.map} title="shopmap"></iframe>
                  </div>
                  <div className="shop-infotext">
                    <div className="shop-title">
                      <p>{props.title}</p>
                    </div>
                    <div className="shop-address">
                      <p>{props.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="shop-lists">
              <div className="shop-list">
                <div className="shop-list-text">
                  <p className="shop-list-flex01">店名</p>
                  <p className="shop-list-flex02">
                    <span>{props.title}</span>
                  </p>
                </div>
              </div>
              <div className="shop-list">
                <div className="shop-list-text shop-list-num">
                  <p className="shop-list-flex01">予約・お問い合わせ</p>
                  <p className="shop-list-flex02">
                    <a href="tel:0894-22-2492">TEL {props.tel}</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="shop-lists">
              <div className="shop-list">
                <div className="shop-list-icon shop-list-flex01">
                  <img src={time} alt="time" />
                  <p>営業時間</p>
                </div>
                <div className="shop-list-text shop-list-flex02">
                  <p className="shop-list-sp">営業時間</p>
                  <p>
                    <span>{props.time}</span>
                  </p>
                </div>
              </div>
              <div className="shop-list">
                <div className="shop-list-icon shop-list-flex01">
                  <img src={rest} alt="rest" />
                  <p>定休日</p>
                </div>
                <div className="shop-list-text shop-list-flex02">
                  <p className="shop-list-sp">定休日</p>
                  <p>
                    <span>{props.holiday}</span>
                  </p>
                </div>
              </div>
              <div className="shop-list">
                <div className="shop-list-icon shop-list-flex01">
                  <img src={card} alt="card" />
                  <p>カード</p>
                </div>
                <div className="shop-list-text shop-list-flex02">
                  <p className="shop-list-sp">カード</p>
                  <p>
                    <span>{props.card}</span>
                  </p>
                </div>
              </div>
              <div className="shop-list">
                <div className="shop-list-icon shop-list-flex01">
                  <img src={menu} alt="menu" />
                  <p>住所</p>
                </div>
                <div className="shop-list-text shop-list-flex02">
                  <p className="shop-list-sp">住所</p>
                  <p>
                    <span>{props.address}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="shop-facility">
              <p>席・設備</p>
              <div className="shop-contents">
                <div className="shop-content">
                  <div className="shop-list-text">
                    <p>座席</p>
                    <p>
                      <span>{props.seat}</span>
                    </p>
                  </div>
                  <div className="shop-list-text">
                    <p>個室</p>
                    <p>
                      <span>{props.room}</span>
                    </p>
                  </div>
                  <div className="shop-list-text">
                    <p>貸切</p>
                    <p>
                      <span>{props.reserved}</span>
                    </p>
                  </div>
                  {/* <div className="shop-list-text">
                    <p>喫煙</p>
                    <p><span>不可</span></p>
                  </div>
                  <div className="shop-list-text">
                    <p>予約</p>
                    <p><span>不可</span></p>
                  </div> */}
                  <div className="shop-list-text">
                    <p>駐車場</p>
                    <p>
                      <span>{props.parking}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
