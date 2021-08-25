/*
Datumtransformation: Hier kommt als Parameter in die Funktion ein Datum, 
welches zu Milisekunden umgewandelt wird. Damit wir die Daten vergleichen können.
*/
export default function datum_transformation(datum) {
  let array = datum.split(".");
  let neu_Datum = new Date(
    array[2],
    parseInt(array[1]) + 1,
    array[0]
  ).getTime();
  return neu_Datum;
}
