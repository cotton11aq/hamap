import React from "react";
import "./assets/scss/style.min.scss";
import {
  EatGenre,
  GoGenre,
  Footer,
  GenreHeadText,
} from "./assets/components/index";
import Top from "./templates/Top/Top";
import {
  Chanpon,
  Kaisen,
  Shotengai,
  Yawatahamaeki,
  Minatto,
  Menrui,
  Izakaya,
  Yakiniku,
  Cafe,
  Iguru,
  Maruyama,
  Aikatei,
  Kinomi,
  Kuore,
  Sanwa,
  Dyuudyuu,
  Ito,
  Praza,
  Atago,
  Fuji,
  Marin,
  Mitsuba,
  Minato,
  Ajiraku,
  Yakijozu,
  Rondon,
  Seike,
  Ueda,
  Sushikou,
  Umisachimaru,
  Kitahama,
  Shigaru,
  Doya,
  Oshimaya,
  Kokeke,
  Takamatsuya,
  Sushiishin,
  Tarugen,
  Kasuga,
  Kairi,
  Atagoginza,
  Dosanko,
  Inoue,
  Ikedaya,
  Ino,
  Ayacho,
  Kaisho,
  Uribo,
  Kimi,
  Maru,
  Yumesuke,
  Tsukiten,
  Kuimonya,
  Meoto,
  Kofu,
  Saisu,
  Ichidai,
  Syokudukuri,
  Enya,
  Ryokichi,
  Bia,
  Ku,
  Porupo,
  Yururi,
  Yochatei,
  Robata,
  Nagayama,
  Toraji,
  Heiwa,
  Gongen,
  Buruman,
  Sutera,
  Chouchou,
  Winpi,
  Yanagi,
  Monburan,
  Deri,
  Bake,
  Amarufi,
  Mezon,
  Gochisou,
  Roru,
  Goto,
  Puchi,
  Konamono,
  Miyachan,
} from "./templates/index";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Top} />
        <Route path="/Chanpon" component={Chanpon} />
        <Route path="/Kaisen" component={Kaisen} />
        <Route path="/Menrui" component={Menrui} />
        <Route path="/Izakaya" component={Izakaya} />
        <Route path="/Yakiniku" component={Yakiniku} />
        <Route path="/Cafe" component={Cafe} />
        <Route path="/Shotengai" component={Shotengai} />
        <Route path="/Yawatahamaeki" component={Yawatahamaeki} />
        <Route path="/Minatto" component={Minatto} />
        <Route exact path="/Iguru" component={Iguru} />
        <Route exact path="/Maruyama" component={Maruyama} />
        <Route exact path="/Aikatei" component={Aikatei} />
        <Route exact path="/Kinomi" component={Kinomi} />
        <Route exact path="/Kuore" component={Kuore} />
        <Route exact path="/Sanwa" component={Sanwa} />
        <Route exact path="/Dyuudyuu" component={Dyuudyuu} />
        <Route exact path="/Ito" component={Ito} />
        <Route exact path="/Praza" component={Praza} />
        <Route exact path="/Atago" component={Atago} />
        <Route exact path="/Fuji" component={Fuji} />
        <Route exact path="/Marin" component={Marin} />
        <Route exact path="/Mitsuba" component={Mitsuba} />
        <Route exact path="/Minato" component={Minato} />
        <Route exact path="/Ajiraku" component={Ajiraku} />
        <Route exact path="/Yakijozu" component={Yakijozu} />
        <Route exact path="/Rondon" component={Rondon} />
        <Route exact path="/Seike" component={Seike} />
        <Route exact path="/Ueda" component={Ueda} />
        <Route exact path="/Sushikou" component={Sushikou} />
        <Route exact path="/Umisachimaru" component={Umisachimaru} />
        <Route exact path="/Kitahama" component={Kitahama} />
        <Route exact path="/Shigaru" component={Shigaru} />
        <Route exact path="/Doya" component={Doya} />
        <Route exact path="/Oshimaya" component={Oshimaya} />
        <Route exact path="/Kokeke" component={Kokeke} />
        <Route exact path="/Takamatsuya" component={Takamatsuya} />
        <Route exact path="/Sushiishin" component={Sushiishin} />
        <Route exact path="/Tarugen" component={Tarugen} />
        <Route exact path="/Kasuga" component={Kasuga} />
        <Route exact path="/Kairi" component={Kairi} />
        <Route exact path="/Atagoginza" component={Atagoginza} />
        <Route exact path="/Dosanko" component={Dosanko} />
        <Route exact path="/Inoue" component={Inoue} />
        <Route exact path="/Ikedaya" component={Ikedaya} />
        <Route exact path="/Ino" component={Ino} />
        <Route exact path="/Ayacho" component={Ayacho} />
        <Route exact path="/Kaisho" component={Kaisho} />
        <Route exact path="/Uribo" component={Uribo} />
        <Route exact path="/Kimi" component={Kimi} />
        <Route exact path="/Maru" component={Maru} />
        <Route exact path="/Yumesuke" component={Yumesuke} />
        <Route exact path="/Tsukiten" component={Tsukiten} />
        <Route exact path="/Kuimonya" component={Kuimonya} />
        <Route exact path="/Meoto" component={Meoto} />
        <Route exact path="/Kofu" component={Kofu} />
        <Route exact path="/Saisu" component={Saisu} />
        <Route exact path="/Ichidai" component={Ichidai} />
        <Route exact path="/Syokudukuri" component={Syokudukuri} />
        <Route exact path="/Enya" component={Enya} />
        <Route exact path="/Ryokichi" component={Ryokichi} />
        <Route exact path="/Bia" component={Bia} />
        <Route exact path="/Ku" component={Ku} />
        <Route exact path="/Porupo" component={Porupo} />
        <Route exact path="/Yururi" component={Yururi} />
        <Route exact path="/Yochatei" component={Yochatei} />
        <Route exact path="/Robata" component={Robata} />
        <Route exact path="/Nagayama" component={Nagayama} />
        <Route exact path="/Toraji" component={Toraji} />
        <Route exact path="/Heiwa" component={Heiwa} />
        <Route exact path="/Gongen" component={Gongen} />
        <Route exact path="/Buruman" component={Buruman} />
        <Route exact path="/Sutera" component={Sutera} />
        <Route exact path="/Chouchou" component={Chouchou} />
        <Route exact path="/Winpi" component={Winpi} />
        <Route exact path="/Yanagi" component={Yanagi} />
        <Route exact path="/Monburan" component={Monburan} />
        <Route exact path="/Deri" component={Deri} />
        <Route exact path="/Bake" component={Bake} />
        <Route exact path="/Amarufi" component={Amarufi} />
        <Route exact path="/Mezon" component={Mezon} />
        <Route exact path="/Gochisou" component={Gochisou} />
        <Route exact path="/Roru" component={Roru} />
        <Route exact path="/Goto" component={Goto} />
        <Route exact path="/Puchi" component={Puchi} />
        <Route exact path="/Konamono" component={Konamono} />
        <Route exact path="/Miyachan" component={Miyachan} />
        <GenreHeadText
          className={"lets lets-none"}
          id={"ideat-sp"}
          title01={"LET'S"}
          title02={"EAT"}
          title03={"!"}
          sub={"八幡浜で、なに食べる？"}
        />
        <EatGenre />
        <GenreHeadText
          className={"lets lets-gray lets-none"}
          id={"idgo-sp"}
          title01={"LET'S"}
          title02={"GO"}
          title03={"!"}
          sub={"八幡浜の、どこで食べる？"}
        />
        <GoGenre />
        <Footer />
      </Router>
    </>
  );
};

export default App;
