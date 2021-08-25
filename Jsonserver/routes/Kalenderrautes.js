const kalenderRoutes = (app, fs) => {
  // variables
  const dataPath = "./data/kalender.json";

  // Anfrage für Micro Frontend
  app.post("/kalendereintrag", async (req, res) => {
    // Somit kann man auf die Kalender.json-Datei zugreifen
    await fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      let daten = JSON.parse(data).Kalender;

      /*Da das Backend in diesem Projekt nicht erstelt und nur kommende Termine angezeigt werden soll,
         habe ich hier ein Filter statt eine schöne SELECT-Anfrage gemacht*/
      const v1_Daten = daten.filter(
        (item) =>
          datum_transformation(req.body.S_Datum) <=
          datum_transformation(item.datum)
      );

      /* 
          hiermit wollen wir die Termine nach Datum sortieren, damit die Fälle bedeckt werden, 
          bei denen die Termine unsortiert gespeichert wurden.
       */
      v1_Daten.sort(function (a, b) {
        if (datum_transformation(a.datum) < datum_transformation(b.datum)) {
          return -1;
        }
        if (datum_transformation(a.datum) > datum_transformation(b.datum)) {
          return 1;
        }
        // Datum müssen gleich sein
        return 0;
      });

      //Hiermit werden nur bestimmte Anzahl von Einträgen zurückgegeben
      const v2_daten = [];
      for (let i = 0; i < req.body.S_AnzahlTermine; i++) {
        v2_daten.push(v1_Daten[i]);
      }

      return res.status(200).json({
        daten: v2_daten,
      });
    });
  });

  // Anfrage für Detailseite, also die Daten für den Termin mit id = übergebene id
  app.get("/detailseite/:id", async (req, res) => {
    // Somit kann man auf die Kalender.json-Datei zugreifen
    await fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      // Um nur die Daten von Kalender zu bekommen
      let daten = JSON.parse(data).Kalender;
      // Hiermit wird nach dem Termin mit der id = übergebene id gesucht.
      for (let i = 0; i < daten.length; i++) {
        if (daten[i].id === parseInt(req.params.id)) {
          //falls die ids übereinstimmen, dann wird der Termin zurückgegeben.
          return res.status(200).json(daten[i]);
        }
      }
    });
  });
};

/*
Datumtransformation: Hier kommt als Parameter in die Funktion ein Datum, 
welches zu Milisekunden umgewandelt wird. Damit wir die Daten vergleichen können.
*/
function datum_transformation(datum) {
  let array = datum.split(".");
  let neu_Datum = new Date(
    array[2],
    parseInt(array[1]) + 1,
    array[0]
  ).getTime();
  return neu_Datum;
}

module.exports = kalenderRoutes;
