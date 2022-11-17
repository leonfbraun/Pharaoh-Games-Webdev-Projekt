const body = document.querySelector("body");
const body_spiel = document.querySelector(".body-bonus-spiel");
const button = document.querySelector("button");
const h1 = document.querySelector(".content-title");
const secretCodeInput = document.querySelector("#secret-code-input");

body.style.background = "black";

button.addEventListener("click", function () {
  const secretCode = secretCodeInput.value;

  if (secretCode == "666") {
    h1.innerHTML = "BRAVO!";
    body.style.background = "lightgreen";
    body_spiel.style.background = "lightgreen";
    secretCodeInput.value = "";
  } else {
    h1.innerHTML = "WRONG!";
    button.innerHTML = "TRY AGAIN";
    body.style.background = "black";
    body_spiel.style.background = "black";
    secretCodeInput.value = "";
  }
});

/* Inspiriert von https://www.youtube.com/watch?v=NXpKN6-KoL0 */