let snowflakes = []; // array to hold snowflake objects

function setup() {
	createCanvas(500, 700);
}

function draw() {

	background('black');

	fill(0, 255, 0);
	strokeWeight(0);
	rect(0, 500, width, 200);

	//snowman body
	fill(255);
	ellipse(250, 500, 200, 200);
	ellipse(250, 375, 150, 150);
	ellipse(250, 275, 100, 100);

	//hat
	fill('grey');
	rect(215, 140, 70, 100);
	ellipse(250, 240, 100, 10);

	//eyes
	fill('black');
	ellipse(235, 265, 5, 5);
	ellipse(265, 265, 5, 5);

	//carrot
	fill('orange');
	triangle(250, 275, 250, 285, 290, 300);

	//arms
	stroke('brown');
	strokeWeight(5);
	line(180, 375, 100, 350);
	line(320, 375, 400, 350);

	//scarf
	strokeWeight(0);
	fill('blue');
	rect(205, 300, 90, 20);
	rect(205, 300, 20, 80);

	//buttons
	fill('black');
	ellipse(250, 340, 7, 7);
	ellipse(250, 370, 7, 7);
	ellipse(250, 400, 7, 7);

	fill(255);

	let t = frameCount / 60; // update time

	// creates random number of snowflakes
	for (let i = 0; i < random(5); i++) {
		snowflakes.push(new snowflake()); // append snowflake object
	}

	// loop through snowflakes with a for..of loop
	for (let flake of snowflakes) {
		flake.update(t); // update snowflake position
		flake.display(); // draw snowflake
	}
}

// snowflake class
function snowflake() {
	// initialize coordinates
	this.posX = 0;
	this.posY = random(-50, 0);
	this.initialangle = random(0, 2 * PI);
	this.size = random(2, 5);

	// radius of snowflake spiral
	// chosen so the snowflakes are uniformly spread out in area
	this.radius = sqrt(random(pow(width / 2, 2)));

	this.update = function (time) {
		// x position follows a circle
		let w = 0.6; // angular speed
		let angle = w * time + this.initialangle;
		this.posX = width / 2 + this.radius * sin(angle);

		// different size snowflakes fall at slightly different y speeds
		this.posY += pow(this.size, 0.5);

		// delete snowflake if past end of screen
		if (this.posY > height) {
			let index = snowflakes.indexOf(this);
			snowflakes.splice(index, 1);
		}
	};

	this.display = function () {
		ellipse(this.posX, this.posY, this.size);
	};
}