let count = 0;
let speed = 100;

let timer = setInterval(tick, speed);

function tick() {
	count++;
	console.log("Tick" + count);
	
	if (count === 10) {
		clearInterval(timer);
	}
}