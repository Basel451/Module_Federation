import React, { useEffect, useState } from "react";
import "./styling.css";
import Error from "../../Component/Error_Component/index";
import Termine from "../../Component/Termine_Component/index";
import Filter from "../../Component/Filter_Component/index";
import { dateneinholen } from "../../Context/dateneinholen";

export default function Home({ value }) {
  const [eintraege, setEintraege] = useState([]);
  const [eintraege2, setEintraege2] = useState([]);
  const [filter_Daten, setFilter_Daten] = useState({
    s_datum: "",
    e_datum: "",
    s_uhrzeit: "",
    e_uhrzeit: "",
    name: "",
  });
  const hintergrund = value.hintergrundFarbe;
  useEffect(() => {
    dateneinholen(setEintraege, setEintraege2, value.pfad);
    console.log(hintergrund);
  }, [value.pfad]);
  return (
    <>
      <div className="Eintraege">
        <Filter value={{ filter_Daten, setEintraege, eintraege2 }} />
        <div className="Ueberschrift">
          <h4 className="Uhrzeit">Uhrzeit</h4>
          <h4 className="Name">Name</h4>
          <h4 className="Ort">Ort</h4>
          <h4 className="Kategorien">Kategorien</h4>
        </div>
        <div className="div_Unterline" />
        {eintraege.length !== 0 && (
          <Termine value={{ eintraege, hintergrund }} />
        )}
        {eintraege.length === 0 && <Error />}
      </div>
    </>
  );
}
