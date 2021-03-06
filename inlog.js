var fakeEmail = "rein@rein.it";
var fakePassword = "abcd1234";
// Wat doet een inlog formulier?

// - [x] veld voor email -> HTML
// - [x] veld password -> HTML
// - [x] knopje -> ook in HTML

// - javascript om te valideren -> klopt het wachtwoord

// - [x] knopje selecteren
var knopje = document.querySelector("button");
// - [x] event listener toevoegen aan het knopje
// - [x] ons eigen commando schrijven (functie)
knopje.addEventListener("click", function logIn() {
  //   console.log("HIER KOMT DE LOGICA");
  // - [x] de inputvelden selecteren
  // - [x] de waarden van email en password uit de inputs halen
  var emailInput = document.getElementById("emailInput").value;
  var passwordInput = document.getElementById("passwordInput").value;
  // - [x] vergelijken -> wachtwoord correct?
  var emailCorrect = emailInput === fakeEmail;
  var passwordCorrect = passwordInput === fakePassword;

  // - [x] if statement -> if(true) -> welkom else -> pech gehad
  if (emailCorrect && passwordCorrect) {
    // - als het wachtwoord wel klopt -> welkom
    // - [x] hele inlog formulier even groeperen in een divje
    var loginForm = document.getElementById("login-form");
    loginForm.style.visibility = "hidden";
    var errormessage = document.getElementById("error");
    errormessage.style.visibility = "hidden";
    // - [x] divje selecteren en -> visibility hidden
    // - [x] boodschap op de pagina weergeven
    var succesMessage = document.getElementById("succes");
    succesMessage.innerText = "Welkom " + fakeEmail;
  } else {
    // - foutmelding weergeven wanneer het wachtwoord niet klopt
    // - [x] visibility hidden in css
    // - [x] foutmelding selecteren
    var errormessage = document.getElementById("error");
    // - [x] iets in de style aanpassen met javascript
    errormessage.style.visibility = "visible";
  }
});

// - valideren of iemand een email heeft ingevuld!
