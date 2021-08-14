import React, { useState } from "react";
import "./styling.css";
import ComNavigation from "../../Component/ComNavigation";
import homepage_bild from "../../images/homepage_bild.png";
import MicroFrontend from "micro_frontend/komendeVeranstalltungen";

const Homepage = () => {
  const [pfad, setPfad] = useState("homepage");
  const [hintergrundFarbe, setHintergrundFarbe] = useState("homepage");
  return (
    <>
      <center>
        <ComNavigation value={{ setPfad, setHintergrundFarbe }} />
        <img src={homepage_bild} alt="Skatebord" width="95%" height="50%" />
        <MicroFrontend value={{ pfad, hintergrundFarbe }} />
      </center>
    </>
  );
};

export default Homepage;
