function ageCompare() {
  const alterOne = document.getElementById("Alter1").value;
  const alterTwo = document.getElementById("Alter2").value;

  const ageGap = alterOne - alterTwo;

  document.querySelector(".age_output").innerText = ageGap;
  document.querySelector(
    ".age_output"
  ).innerHTML = `Ihr habt einen Altersunterschied von ${ageGap}`;
}
