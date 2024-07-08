function AQI() {
  const rangeNumber = document.getElementById("aqi").value;
  const quality = document.querySelector(".check_output");

  if (rangeNumber <= 50) {
    quality.innerText =
      "Level of health concern:  Good Level of health effect: Little or no risk";
  } else if (rangeNumber > 50 && rangeNumber <= 100) {
    quality.innerText =
      "Level of health concern:  Moderate Level of health effect: Acceptable quality";
  } else if (rangeNumber > 100 && rangeNumber <= 150) {
    quality.innerText =
      "Level of health concern:  Unhealthy for sensitive groups Level of health effect: Generable publics not likely affected";
  }
}

function updateQuality() {
  const selectedValue = document.getElementById("selectedQuality").value;
  document.getElementById("selectedQuality").innerText = selectedValue;
}
