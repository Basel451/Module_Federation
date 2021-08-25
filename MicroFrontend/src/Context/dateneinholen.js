import axios from "axios";

// Diese Funktion dient zum Einholen von Daten aus dem Json-server, welche wir im Context aufrufen
export async function dateneinholen(
  setEintraege,
  setEintraege2,
  kategorie,
  AnzahlTermine,
  datum
) {
  return await axios
    //Hier wird die Anfrage an den Jsonserver geschickt und als Response bekommen wir die Daten
    .post("http://localhost:3020/kalendereintrag", {
      S_AnzahlTermine: AnzahlTermine,
      S_Datum: datum,
    })
    .then(
      await function (res) {
        // Vorfilter der Daten nach Kategorien und Orte
        if (kategorie === "halle59") {
          // Hiermit filtern wir die K_Eintraege nur auf die mit Ort = Halle59 und Alle
          const Eintraege_v1 = res.data.daten.filter(
            (item) => item.ort === "Halle59" || item.ort === "Alle"
          );
          // Nach Filter speichern wir das Ergebnis in die Variablen von Context.
          setEintraege(Eintraege_v1);
          setEintraege2(Eintraege_v1);
        } else if (kategorie !== "homepage") {
          const Eintraege_v2 = res.data.daten.filter((item) => {
            //Da die Kategorie ein Array ist, wird die For-Schleife verwendet, um auf einzele Elemente zuzugreifen
            for (let i = 0; i < item.kategorie.length; i++) {
              if (item.kategorie[i].name.toLowerCase() === kategorie) {
                return true;
              }
            }
            return false;
          });
          setEintraege(Eintraege_v2);
          setEintraege2(Eintraege_v2);
        } else {
          //Wenn kategorie nicht gibt, dann sollen die Daten einfach in Variablen gespeichert.
          setEintraege(res.data.daten);
          setEintraege2(res.data.daten);
        }
      }
    )
    .catch((err) => {
      // Falls ein Error geworfen wird, wird hierdurch auf die Konosole ausgegeben
      console.log(JSON.stringify(err));
      return "Hooply, etwas ist schief gelaufen!!";
    });
}
