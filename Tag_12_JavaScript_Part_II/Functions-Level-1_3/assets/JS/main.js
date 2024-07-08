function intro3(Name, Stadt, Alter) {
  console.log(
    "Hallo, mein Name ist " +
      Name +
      ". Ich bin " +
      Alter +
      " Jahre alt. Ich komme aus " +
      Stadt
  );
}

console.log(
  intro3((Name = "Victoria"), (Stadt = "Düsseldorf"), (Alter = "31"))
);
