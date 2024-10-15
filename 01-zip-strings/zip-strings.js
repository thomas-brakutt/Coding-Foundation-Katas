/*
Kata von:
https://github.com/thomas-brakutt/Coding-Foundation-Katas/tree/main/01-zip-strings 
Aufgabe in der Readme */

function zipStrings(str1, str2) {
  let ergebnis = ""; // Variable mit leeren string zum Ergebnis speichern

  // herausfinden welcher String länger ist für nachfolgende Schleife (wie oft Schleife durchlaufen muss)

  let längsterStr = 0;

  if (str1.length >= str2.length) {
    längsterStr = str1.length;
  } else {
    längsterStr = str2.length;
  }
  // kürzere Variante dafür aus dem Netz:
  // const längsterStr = Math.max(str1.length, str2 length);

  // Schleife bis max Länge von ermittelten "längsterStr"
  for (let i = 0; i < längsterStr; i++) {
    if (i < str1.length) {
      ergebnis += str1[i];
    }
    if (i < str2.length) {
      ergebnis += str2[i];
    }
  } /* Überprüfung, ob aktueller Index innerhalb der Grenze von str1 u. str2 liegt. Wenn ja = Zeichen in "ergebnis" gespeichert. Dadurch werden die Zeichen beider str´s abwechselnd kombiniert */

  return ergebnis;
}

console.log(zipStrings("abc", "123")); // "a1b2c3"
console.log(zipStrings("abc", "1")); // "a1bc"
console.log(zipStrings("a", "123")); // "a123"
console.log(zipStrings("", "123")); // "123"
console.log(zipStrings("abc", "")); // "abc"

/*
Erklärung der for-Schleife und if-Bedingung (für mich zum merken (^_^) ):

- for-Schleife:

for (let i = 0; i < längsterStr; i++)
i beginnt bei 0 und läuft so lange, wie i kleiner ist als längsterStr. Nach jedem Durchlauf wird i um 1 erhöht. 
längsterStr - wurde oben ermittelt -> sollte die Länge des längeren der beiden Strings (str1 und str2) sein.

- if-Bedingung):

if (i < str1.length) -> Hier wird überprüft, ob der aktuelle Index i kleiner ist als die Länge von str1. Wenn das der Fall ist, wird das Zeichen an der Position i von str1 zum 
ergebnis hinzugefügt.

if (i < str2.length) -> Das Gleiche passiert hier für str2. Wenn i kleiner ist als die Länge von str2, wird das Zeichen an der Position i von str2 ebenfalls zum ergebnis hinzugefügt.

- return ergebnis -> ergebnis ist die Variable, die die kombinierten Zeichen von str1 u. str2 speichert.
Jedes Mal, wenn ein Zeichen von einem der beiden Strings hinzugefügt wird, wird es an ergebnis angehängt.

Wenn einer der Strings kürzer ist, wird der Rest des längeren Strings einfach ignoriert, sobald die Schleife die Länge des kürzeren Strings überschreitet

*/
