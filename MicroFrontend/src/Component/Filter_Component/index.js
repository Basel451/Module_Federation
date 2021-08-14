import React from "react";
import "./styling.css";
import DatumFilterKomponent from "./DatumFilter_Component";
import UhrzeitFilterKomponent from "./UhrzeitFilter_Component";
import NameFilterKomponent from "./NameFilter_Component";

export default function Filter({value}) {
  return (
    <>
      <div className="div_filter">
        <DatumFilterKomponent value={value}/>
        <UhrzeitFilterKomponent value={value} />
        <NameFilterKomponent value={value} />
      </div>
    </>
  );
}
