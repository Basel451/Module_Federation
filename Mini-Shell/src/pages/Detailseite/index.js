import React from "react";
import "./styling.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Detailseite = (props) => {
  /* Hier wird die Konstante Eintrag definiert, damit der Eintrag, 
  welcher wir vom Json-Server erhalenwird, gespeichert.*/
  const [eintrag, setEintrag] = useState({});
  // Hiermit hat man den Zugriff auf die ID, welche mit der URL gesendet wird.
  const E_id = props.match.params.id;

  //Einholen der Daten für den Termin mit der id = übergebene ID
  async function dateneinholen() {
    return await axios
      .get("http://localhost:3020/detailseite/" + E_id)
      .then(
        /*Falls die Abfrage richtig war, dann kann man auf die Daten, 
        welche man als Antwort auf seine Abfrage bekommt, mit res.data zugreifen. 
        Wobei re für Response steht.*/
        await function (res) {
          setEintrag(res.data);
          console.log(res.data);
        }
      )
      /*Falls die Abfrage nicht richtig ist oder der Server nicht gestartet ist, 
      dann bekommt man einen Error.*/
      .catch((err) => {
        console.log(JSON.stringify(err));
        return "Hooply, etwas ist schief gelaufen!!";
      });
  }
  // Hiermit wird die "dateneinholen"-Funktion nur einmal ausgefuhrt.
  useEffect(() => {
    dateneinholen();
  }, []);
  return (
    <>
      <div className="div_Continer">
        <div className="div_titel">
          <center>
            <h2>{eintrag.titel}</h2>
          </center>
        </div>
        <div className="div_datum">
          <h4>Datum:</h4>
          <p>{eintrag.datum}</p>
        </div>
        <div className="div_uhrzeit">
          <h4>Uhrzeit:</h4>
          <p>{eintrag.uhrzeit}</p>
        </div>
        <div className="div_ort">
          <h4>Ort:</h4>
          <p>{eintrag.ort}</p>
        </div>
        <div className="div_beschreibung">
          <h4>Beschreibung:</h4>
          <p>{eintrag.beschreibung}</p>
        </div>
      </div>
    </>
  );
};

export default Detailseite;
