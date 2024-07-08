function adult() {
  const altersAbfrage = document.getElementById("age").value;
  const result = document.querySelector(".check_output");

  if (altersAbfrage >= 18) {
    result.innerText = "Du bist volljährig!";
  } else {
    result.innerText = "Du bist minderjährig!";
  }
}
