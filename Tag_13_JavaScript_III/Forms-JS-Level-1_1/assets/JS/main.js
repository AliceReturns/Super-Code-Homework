function verdoppelMich() {
  const eingabeWert = document.getElementById("eingabe").value;
  // zuerst müssen wir das Eingabefeld ansprechen und den darin Eingegeben Wert bekommen
  // const ist das Schlüsselwort zur Deklaration.
  // eingabeWert ist der Name der Variablen.
  // document.getElementById('eingabe').value holt den aktuellen Wert des Eingabefeldes mit der ID eingabe.
  // Dieser Wert wird der Variablen eingabeWert zugewiesen.
  const ergebnis = eingabeWert * 2;
  // const ergebnis: Diese Zeile deklariert eine weitere Konstante ergebnis und weist ihr das Ergebnis der Multiplikation des eingabeWerts mit 2 zu.
  document.querySelector(".eingabe_output").innerText = ergebnis;
  // Zeigt das Ergebnis im <p> Element an
}
