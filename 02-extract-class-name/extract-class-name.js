/*
https://github.com/thomas-brakutt/Coding-Foundation-Katas/tree/main/02-extract-class-name

Aufgabe in der Readme-Datei

*/

const jahr = {
  2020: "2020",
  2021: "2021",
  2022: "2022",
  2023: "2023",
  2024: "2024",
};
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
  let array1 = sessionTitle.split(" ");
  // console.log(array1);
  const jahre = Object.values(jahr);
  const monate = Object.keys(monatsName);

  let jahrGefunden = null;
  for (let i = 0; i < jahre.length; i++) {
    if (array1.includes(jahre[i])) {
      jahrGefunden = jahre[i];
      // console.log(jahrGefunden);
      break;
    }
  }

  let monatGefunden = null;
  for (let i = 0; i < monate.length; i++) {
    if (array1.includes(monate[i])) {
      monatGefunden = monatsName[monate[i]];
      // console.log(monatGefunden);
      break;
    }
  }
  if (array1.includes("Class") && jahrGefunden && monatGefunden) {
    return jahrGefunden + "-" + monatGefunden;
  } else {
    return null;
  }
}

console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"

console.log(extractClassName("Live-Session Class 2022 März")); // "2022-03"

console.log(extractClassName("Live-Session Class 2022 Maerz")); // "2022-03"

console.log(extractClassName("Live-Session 2022 April")); // null
