import datum_transformation from "./datum_transformation";

/* 
Filter_funktion: Als Parameter erhält diese Funktion:
   => das Objekt Filter_Daten, durch die der Filter die Daten filtert und dieses Objekt ist im Hompepage definiert.
   => Die Variable Eintrage2, welche die Daten zum Filtern enthält.
   => setEintraege, durch die die gefilterte Daten gespeichert werden.
Jedes Mal wenn die filter_Daten durch ein Ereignis von einem Ereignis geändert wird, wird diese Funktion aufgerufen und 
der komplette Filter gurchgeführt.
*/
export default function filter_fun(filter_Daten, eintraege2, setEintraege) {
  // Hier wird die Variable e definiert, da das Konstant eintraege2 nicht geändert werden kann.
  let e = eintraege2;
  // Hier wird die Variable neue_Eintraege als Zwischenspeicher definiert, um das Ergebnis des Filters zu speichern.
  var neue_Eintraege = [];
  /* Filter der Daten für Sart-Datum: Falls die Eigenschaft s_datum im übergebene Objekt filter_Daten nicht leer ist, 
  soll der Filter durchgeführt werden*/
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
  // Filter der Daten für End-Datum
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
  // Filter der Daten für Start-Uhrzeit
  if (filter_Daten.s_uhrzeit !== "") {
    for (let i = 0; i < e.length; i++) {
      if (parseInt(e[i].uhrzeit.replace(":", "")) >= filter_Daten.s_uhrzeit) {
        neue_Eintraege.push(e[i]);
      }
    }
    e = neue_Eintraege;
    neue_Eintraege = [];
  }
  // Filter der Daten für End-Uhrzeit
  if (filter_Daten.e_uhrzeit !== "") {
    for (let i = 0; i < e.length; i++) {
      if (parseInt(e[i].uhrzeit.replace(":", "")) <= filter_Daten.e_uhrzeit) {
        neue_Eintraege.push(e[i]);
      }
    }
    e = neue_Eintraege;
    neue_Eintraege = [];
  }
  // Filter der Daten für Suchbegriff
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
