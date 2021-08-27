import React, { useState } from "react";
import "./styling.css";
import ComNavigation from "../../Component/ComNavigation";
import homepage_bild from "../../images/homepage_bild.png";
import MicroFrontend from "micro_frontend/komendeVeranstalltungen";

const Homepage = () => {
  const [kategorie, setKategorie] = useState("homepage");
  const [hintergrundFarbe, setHintergrundFarbe] = useState("white");
  const AnzahlTermine = 8;
  return (
    <>
      <center>
        <ComNavigation value={{ setKategorie, setHintergrundFarbe }} />
        <img src={homepage_bild} alt="Skatebord" width="95%" height="50%" />
        <div className="div_mf">
          <MicroFrontend
            value={{ kategorie, hintergrundFarbe, AnzahlTermine }}
          />
        </div>
      </center>
    </>
  );
};

export default Homepage;
