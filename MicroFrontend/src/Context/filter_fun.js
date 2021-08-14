import datum_transformation from "./datum_transformation";
// Filter_Start_Datum_funktionen
export default function filter_fun(filter_Daten, eintraege2, setEintraege) {
  let e = eintraege2;
  var neue_Eintraege = [];
  if (filter_Daten.s_datum !== "") {
    for (let i = 0; i < e.length; i++) {
      if (
        datum_transformation(e[i].datum) >=
        datum_transformation(filter_Daten.s_datum)
      ) {
        neue_Eintraege.push(e[i]);
      }
    }
    e = neue_Eintraege;
    neue_Eintraege = [];
  }

  if (filter_Daten.e_datum !== "") {
    for (let i = 0; i < e.length; i++) {
      if (
        datum_transformation(e[i].datum) <=
        datum_transformation(filter_Daten.e_datum)
      ) {
        neue_Eintraege.push(e[i]);
      }
    }
    e = neue_Eintraege;
    neue_Eintraege = [];
  }

  if (filter_Daten.s_uhrzeit !== "") {
    for (let i = 0; i < e.length; i++) {
      if (parseInt(e[i].uhrzeit.replace(":", "")) >= filter_Daten.s_uhrzeit) {
        neue_Eintraege.push(e[i]);
      }
    }
    e = neue_Eintraege;
    neue_Eintraege = [];
  }
  if (filter_Daten.e_uhrzeit !== "") {
    for (let i = 0; i < e.length; i++) {
      if (parseInt(e[i].uhrzeit.replace(":", "")) <= filter_Daten.e_uhrzeit) {
        neue_Eintraege.push(e[i]);
      }
    }
    e = neue_Eintraege;
    neue_Eintraege = [];
  }
  if (filter_Daten.name !== "") {
    for (let i = 0; i < e.length; i++) {
      if (e[i].titel.toLowerCase().search(filter_Daten.name) !== -1) {
        neue_Eintraege.push(e[i]);
      }
    }
    e = neue_Eintraege;
    neue_Eintraege = [];
  }
  setEintraege(e);
}
