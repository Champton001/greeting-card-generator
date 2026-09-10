let name = prompt("A name:");
let adjective = prompt("An adjective:");
let noun = prompt("A noun:");
let place = prompt("A place:");
let food = prompt("A food:");

function makeCard() {
  console.log("Dear " + name + ",");
  console.log("You are as " + adjective + " as a " + noun + ".");
  console.log("I hope you have fun at " + place + ",");
  console.log("Enjoy some " + food + "!");
  console.log("Have an awesome day generator.");
  
}

function makeThankYouCard() {
	console.log("Dear " + name + ",");
	console.log("Thank you for being a great friend! ");
	console.log("Lets meet at " + place + " and eat " + food + "!");
}
makeCard();
makeThankYouCard();