let name = prompt("A name:");
let adjective = prompt("An adjective:");
let noun = prompt("A noun:");

let closings = [
  "You are a legend.",
  "Stay golden.",
  "Signs point to awesome.",
  "Outstanding.",
  "You are marvelous.",
];

let style = prompt("Fancy or silly?");


function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function makeCard() {
  console.log("Dear " + name + ",");
  console.log("You are as " + adjective + " as a " + noun + ".");
  let index = randomNumber(0, closings.length - 1);
  console.log(closings[index]);
  if (style.toLowerCase() === "fancy") {
    console.log("Dearest " + name + ",");
  } else {
    console.log("YO " + name + "!");
  }
}

makeCard();
