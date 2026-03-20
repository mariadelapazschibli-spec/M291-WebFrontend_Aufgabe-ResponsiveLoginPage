const submitButton = document.getElementById("submitButton");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const loginForm = document.getElementById("loginForm");

// Button wird automatisch deaktiviert
submitButton.disabled = true;

// Funktion validateForm
function validateForm() {

  // Abstände entfernen
  const first = firstName.value.trim();
  const last = lastName.value.trim();

// mindestens 1 Zeichen
  if (first.length < 2 || last.length < 2) {
    submitButton.disabled = true;
    errorMessage.textContent = "Bitte Vor- und Nachnamen eingeben (mind. 2 Zeichen).";
  } else {
    submitButton.disabled = false;
    errorMessage.textContent = "";
  }

  // beide Felder gefüllt
  if (firstName.value === "" || lastName.value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

// löst die Funktion validateForm aus, sobald etwas eingetippt wird
firstName.addEventListener("input", validateForm);
lastName.addEventListener("input", validateForm);

// löst Meldung nach senden aus
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Vorname: " + firstName.value + "\nNachname: " + lastName.value);
});
