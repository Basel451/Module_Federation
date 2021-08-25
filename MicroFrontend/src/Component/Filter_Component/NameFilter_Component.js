import React from "react";
import "./styling.css";
import Filter_fun from "../../Context/filter_fun";

export default function Filter({ value }) {
  return (
    <>
      <div className="suche_input ">
        <div className="suche_input_block">
          <p>Name:</p>
        </div>
        <div className="suche_input_block">
          <input
            type="text"
            className="input_suche_Name"
            placeholder="Ich suche nach...."
            onChange={(e) => {
              value.filter_Daten.name = e.target.value.toLowerCase();
              Filter_fun(
                value.filter_Daten,
                value.eintraege2,
                value.setEintraege
              );
            }}
          />
        </div>
        <form className="suche_input_block">
          <button className="btn-primary" type="submit">
            Clear
          </button>
        </form>
      </div>
    </>
  );
}
