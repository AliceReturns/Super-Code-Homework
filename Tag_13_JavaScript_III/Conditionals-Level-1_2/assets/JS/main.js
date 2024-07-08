function weather() {
  const eingabe = document.getElementById("weatherQuality").value;
  const quality = document.querySelector(".weathercheck_output");

  if (eingabe >= 8 && eingabe <= 10) {
    quality.innerText = "Super";
  } else if (eingabe >= 6 && eingabe <= 7) {
    quality.innerText = "Gut";
  } else if (eingabe >= 3 && eingabe <= 5) {
    quality.innerText = "Okay";
  } else if (eingabe == 0 && eingabe <= 2) {
    quality.innerText = "Schlecht";
  } else if (eingabe > 10) {
    quality.innerText = "Bitte nur Werte zwischen 0 und 10 eingeben.";
  }
}
