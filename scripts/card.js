alert("hello world");

let nameInput = document.getElementById("name-input");
let adjectiveInput = document.getElementById("adjective-input");
let nounInput = document.getElementById("noun-input");
let makeButton = document.getElementById("make-button");
let cardText = document.getElementById("card-text");

function makeCard() {
  let friendName = nameInput.value;
  let adjective = adjectiveInput.value;
  let noun = nounInput.value;
  cardText.textContent =
    "Dear " + personReading + ", I really enjoy " + adjective +
    " by  " + noun + ". Thank you for listening. You Rock!!! ";
}

makeButton.addEventListener("click", makeCard);

