import React from "react";
import "./styling.css";

export default function Termine({ value }) {
  let d = "";
  //console.log(value.hintergrund);
  return (
    <>
      {value.eintraege.map((item, index) => {
        return (
          <article key={`${index}-termin`} className="div_Termine">
            {d !== item.datum && index !== 0 && (
              <div className="div_Unterline" />
            )}
            <div className="div_Termin_block">
              <div className="div_Termine_Datums">
                {d !== item.datum && <h3>{item.datum}</h3>}
              </div>
              <div className="div_Termin_Daten_block">
                <a
                  className="div_Termin_Daten"
                  href={"http://localhost:8000/Detailseite/" + item.id}
                >
                  <p className="div_Termine_Uhrzeit">{item.uhrzeit}</p>
                  <p className="div_Termine_Titel">{item.titel}</p>
                  <p className="div_Termine_Ort">{item.ort}</p>
                  <div className="div_Termine_Kategorie_Block">
                    {item.kategorie.map((item2, index) => {
                      return (
                        <div
                          key={`${index}-kategorie`}
                          className={`${item2.name}_kategorie`}
                        >
                          <p>{item2.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </a>
                <div className="div_Unterline" />
              </div>
            </div>
            <script>{(d = item.datum)}</script>
          </article>
        );
      })}
    </>
  );
}
