function filterApiData(apiData, mandatoryKeys) {
  let gefilterteDaten = []; // Variable mit leerem Array, zum speichern der gefilterten Daten

  for (let i = 0; i < apiData.length; i++) {
    // Objekte durchlaufen in apiData
    let apiDataIndex = apiData[i]; // Variable mit apiData-Index gespeichert
    let alleSchlüsselVorhanden = true; // Annahme, dass alle Schlüssel vorhanden sind

    for (let j = 0; j < mandatoryKeys.length; j++) {
      // durchläuft die Schlüssel in mandatoryKeys
      let = schlüssel = mandatoryKeys[j]; // Variable mit mandatoryKeys-Index gespeichert

      // Bedingung:
      if (!(schlüssel in apiDataIndex)) {
        // wenn Schlüssel nicht in apiDataIndex ...
        alleSchlüsselVorhanden = false; // wird alleSchlüsselVorhanden auf false gesetzt

        break; // beendet die Schleifen, keine weitere Prüfung notwendig
      }
    }
    if (alleSchlüsselVorhanden) {
      //wenn Schlüssel vorhanden -> fügt mit push.Methode zur gefiltertenDaten-Variablen
      gefilterteDaten.push(apiDataIndex);
    }
  }
  return gefilterteDaten;
}

const data1 = [{ id: 1, price: 100 }, { price: 50 }];
const filteredData1 = filterApiData(data1, ["id"]);
console.log(filteredData1); // [{ id: 1, price: 100 }]

const data2 = [
  { id: 1, price: 100 },
  { id: 2, title: "" },
  { id: 3, price: 50 },
];
const filteredData2 = filterApiData(data2, ["id", "price"]);
console.log(filteredData2); // [{ id: 1, price: 100 }, { id: 3, price: 50 }]

/*
Zusammenfassung:

1. Funktion:
filterApiData: Diese Funktion nimmt zwei Parameter entgegen:
                - apiData: Ein Array mit Objekten, das gefiltert werden soll.
                - mandatoryKeys: Ein Array mit Schlüsseln, die in jedem Objekt vorhanden sein müssen.

2. Leeres Array:
filteredData: Hier speichern wir die Objekte in einerm Araay, die die Bedingungen erfüllen.

3. 1. for-Schleife: durchläuft jedes Objekt in apiData

4. 2. for-Schleife: jedes Objekt in mandatoryKeys wird überprüft, ob alle Schlüssel enthalten sind

5. Bedingung überprüfen: Wenn ein Schlüssel nicht vorhanden ist, wird allKeysPresent auf
                        false gesetzt und Schleife wird beendet (mit break)

6. Objekt hinzufügen: Wenn alle Schlüssel vorhanden sind, fügen wir das Objekt mit push.Methode zum
filteredData-Array hinzu.

7. Rückgabe: Am Ende wird das gefilterte Array zurückgegeben.

*/
