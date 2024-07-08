function adult() {
  event.preventDefault();

  const altersAbfrage = document.getElementById("age").value;
  const eingabe = document.querySelector(".check_output");

  if (altersAbfrage >= 18) {
    eingabe.innerText = "Du darfst Shisha rauchen !";
  } else if (altersAbfrage <= 0) {
    eingabe.innerText = "Bitte gib ein Alter ein.";
  } else {
    eingabe.innerText = "Tut mir leid. Du bist zu jung für Shisha.";
  }
}
