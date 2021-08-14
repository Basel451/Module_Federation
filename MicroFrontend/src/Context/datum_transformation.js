//Datumtransformation
export default function datum_transformation(datum) {
  let array = datum.split(".");
  let neu_Datum = new Date(
    array[2],
    parseInt(array[1]) + 1,
    array[0]
  ).getTime();
  return neu_Datum;
}
