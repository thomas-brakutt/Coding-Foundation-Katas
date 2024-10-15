/*
https://github.com/thomas-brakutt/Coding-Foundation-Katas/tree/main/02-extract-class-name

Aufgabe in der Readme-Datei

*/

// Objekt für die Jahreszahlen
const jahr = {
  2020: "2020",
  2021: "2021",
  2022: "2022",
  2023: "2023",
  2024: "2024",
};
// Objekt für die Monatsnamen und -zahlen
const monatsName = {
  Januar: "01",
  Februar: "02",
  März: "03",
  Maerz: "03",
  April: "04",
  Mai: "05",
  Juni: "06",
  Juli: "07",
  August: "08",
  September: "09",
  Oktober: "10",
  November: "11",
  Dezember: "12",
};

function extractClassName(sessionTitle) {
  let array1 = sessionTitle.split(" "); // split.Methode -> gibt Array zurück mit einzelne Wörter u. speichert in Variable
  // console.log(array1);   // Test ob geklappt
  const jahre = Object.values(jahr); // Object.Methode um Jahreszahlen als Array in Variable zu speichern
  // console.log(jahre); // Test
  const monate = Object.keys(monatsName); // Object.Methode um Monate als Array in Variable zu speichern
  // console.log(monate); // Test

  // Schleife untersucht, ob eine Jahreszahl (aus jahre) in dem array1 einhalten ist
  let jahrGefunden = null;
  for (let i = 0; i < jahre.length; i++) {
    if (array1.includes(jahre[i])) {
      jahrGefunden = jahre[i]; // wenn ja wird die gefundene Jahreszahl in jahrGefunden-Variablen gespeichert
      // console.log(jahrGefunden);
      break;
    }
  }

  // Schleife untersucht, ob eine Monat (aus monate) in dem array1 einhalten ist
  let monatGefunden = null;
  for (let i = 0; i < monate.length; i++) {
    if (array1.includes(monate[i])) {
      // console.log(monate[i]); // Test: gibt Monatsname heraus
      // console.log(monatsName[monate[i]]);  // Test: gibt Monatszahl heraus
      monatGefunden = monatsName[monate[i]]; // wenn ja wird die Monatszahl in der monatGefunden-Variablen gespeichert
      // console.log(monatGefunden); // Test
      break;
    }
  }
  // check ob "Class", eine Jahreszahl und ein Monat enthalten ist
  if (array1.includes("Class") && jahrGefunden && monatGefunden) {
    return jahrGefunden + "-" + monatGefunden; // wenn ja, dann return "jahrGefunden + "-" + monatGefunden;"
  } else {
    return null; // wenn nicht = null
  }
}

console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"

console.log(extractClassName("Live-Session Class 2022 März")); // "2022-03"

console.log(extractClassName("Live-Session Class 2022 Maerz")); // "2022-03"

console.log(extractClassName("Live-Session 2022 April")); // null
