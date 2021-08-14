import axios from "axios";
import datum_transformation from "./datum_transformation";

// Diese Funktion dient zum Einholen von Daten aus dem Json-server, welche wir im Context aufrufen
export async function dateneinholen(setEintraege, setEintraege2, pfad) {
  return await axios
    .get("http://localhost:3000/Kalendereintrag")
    .then(
      await function (res) {
        /* 
          hiermit wollen wir die Termine nach Datum sortieren, damit die Fälle bedeckt werden, 
          bei denen die Termine unsortiert gespeichert wurden.
          */
        const K_Eintraege = res.data.sort(function (a, b) {
          if (datum_transformation(a.datum) < datum_transformation(b.datum)) {
            return -1;
          }
          if (datum_transformation(a.datum) > datum_transformation(b.datum)) {
            return 1;
          }
          // Datum müssen gleich sein
          return 0;
        });

        // Vorfilter der Daten nach Kategorien und Orte
        if (pfad === "halle59") {
          // Hiermit filtern wir die K_Eintraege nur auf die mit Ort = Halle59 und Alle
          const neueK_Eintraege = K_Eintraege.filter(
            (item) => item.ort === "Halle59" || item.ort === "Alle"
          );
          // Nach Filter speichern wir das Ergebnis in die Variablen von Context.
          setEintraege(neueK_Eintraege);
          setEintraege2(neueK_Eintraege);
        } else if (pfad !== "homepage") {
          const neueK_Eintraege = K_Eintraege.filter((item) => {
            //Da die Kategorie ein Array ist, wird die For-Schleife verwendet, um auf einzele Elemente zuzugreifen
            for (let i = 0; i < item.kategorie.length; i++) {
              if (item.kategorie[i].name.toLowerCase() === pfad) {
                return true;
              }
            }
            return false;
          });
          setEintraege(neueK_Eintraege);
          setEintraege2(neueK_Eintraege);
        } else {
          //Wenn Pfad nicht gibt, dann sollen die Daten einfach in Variablen gespeichert.
          setEintraege(K_Eintraege);
          setEintraege2(K_Eintraege);
        }
      }
    )
    .catch((err) => {
      console.log(JSON.stringify(err));
      return "Hooply, etwas ist schief gelaufen!!";
    });
}
