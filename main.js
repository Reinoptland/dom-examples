// - [x] maak een knopje
// - [x] selecteer het knopje
// console.log(knopje);
// - [x] event listener toevoegen aan het knopje
// - [x] geef een instructie mee aan het knopje

var knopje = document.querySelector("button");

knopje.addEventListener("click", function doIets() {
  var header = document.querySelector("h1");
  header.innerText = "IETS ANDERS";
  header.style.color = "Orange";
});
