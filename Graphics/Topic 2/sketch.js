var turtle;

function setup() {
	createCanvas(640, 480);
	var turtle = loadImage("turtle.png");
}

function draw() {
	background(0, 0, 150);
	image(turtle, mouseX, mouseY, 256, 256);

}