import React from "react";
import "./styling.css";
import Filter_fun from "../../Context/filter_fun";

export default function Filter({ value }) {
  return (
    <>
      <div className="suche_input">
        <div className="suche_input_block">
          <p>Uhrzeit:</p>
        </div>
        <div className="suche_input_block">
          <p>von</p>
          <input
            type="time"
            className="input_suche"
            onChange={(e) => {
              let v = e.target.value.replace(":", "");
              value.filter_Daten.s_uhrzeit = parseInt(v);
              Filter_fun(
                value.filter_Daten,
                value.eintraege2,
                value.setEintraege
              );
            }}
          />
        </div>
        <div className="suche_input_block">
          <p>bis</p>
          <input
            type="time"
            className="input_suche"
            onChange={(e) => {
              let v = e.target.value.replace(":", "");
              value.filter_Daten.e_uhrzeit = parseInt(v);
              Filter_fun(
                value.filter_Daten,
                value.eintraege2,
                value.setEintraege
              );
            }}
          />
        </div>
      </div>
    </>
  );
}
