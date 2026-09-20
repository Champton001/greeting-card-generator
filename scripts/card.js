

let nameInput = document.getElementById("name-input");
let adjectiveInput = document.getElementById("adjective-input");
let nounInput = document.getElementById("noun-input");
let makeButton = document.getElementById("make-button");
let cardText = document.getElementById("card-text");
let cardClosings = ["Goodbye!", "See you later!", "Take care!", "Have a great day!", "Adios!"]


function makeCard() {
  let name = nameInput.value;
  let adjective = adjectiveInput.value;
  let noun = nounInput.value;
  let index = randomNumber(0, cardClosings.length - 1);
  let randomClosing = cardClosings[index];
  let cardSection = document.getElementById("card-section");
  cardSection.hidden = false;
  console.log(randomClosing);
  cardText.textContent =
    "Dear " + name + ", I really enjoy " + adjective +
    " by  " + noun + ". " + randomClosing ;
}

function randomNumber(a,b){
	return Math.floor(Math.random() * (b - a + 1))
}

function surpriseMe() {
	let index = randomNumber(0, cardClosings.length - 1);
	let randomClosing = cardClosing[index];
	cardText.textContent = randomClosing;
}

let surpriseButton = document.getElementById("surprise-button");
surpriseButton.addEventListener("click", surpriseMe);


makeButton.addEventListener("click", makeCard);

