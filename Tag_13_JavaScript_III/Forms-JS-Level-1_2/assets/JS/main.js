function wieAlt() {
  const jahrgang = document.getElementById("geburtsdatum").value;
  const alter = 2024 - jahrgang;
  document.querySelector(".age_output").innerText = alter;
}
