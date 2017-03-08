var targetIsVisible = false;

function setup() {
	createCanvas(500, 600);
}

function target(x, y){
	fill(255, 0,0);
	ellipse(x, y, 50, 50);
	fill(255, 255, 255);
	ellipse(x, y, 40, 40);
	fill(255, 0, 0);
	ellipse(x, y, 30, 30);
	fill(255, 255, 255);
	ellipse(x, y, 20, 20);
	fill(255, 0, 0);
	ellipse(x, y, 10, 10);
}

function draw() {
	background(50, 50, 50);
	if(targetIsVisible){
		target(mouseX, mouseY);
	}
	if(keyIsDown(SHIFT)){
		targetIsVisible = true;
	}
	if(keyReleased(SHIFT))
	{
		targetIsVisible = false;
	}
}