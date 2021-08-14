import React from "react";
import "./styling.css";
import Filter_fun from "../../Context/filter_fun";

export default function Filter({value} ) {
  return (
    <>
      <div className="suche_input">
        <div className="suche_input_block">
          <p>Datum:</p>
        </div>
        <div className="suche_input_block">
          <p>von</p>
          <input
            type="date"
            className="input_suche"
            onChange={(e) => {
              value.filter_Daten.s_datum = new Date(
                e.target.value
              ).toLocaleDateString();
              Filter_fun(value.filter_Daten, value.eintraege2, value.setEintraege);
            }}
          />
        </div>
        <div className="suche_input_block">
          <p>bis</p>
          <input
            type="date"
            className="input_suche"
            onChange={(e) => {
              value.filter_Daten.e_datum = new Date(
                e.target.value
              ).toLocaleDateString();
              Filter_fun(value.filter_Daten, value.eintraege2, value.setEintraege);
            }}
          />
        </div>
      </div>
    </>
  );
}
