/*Clayton Samson*/
/*CSamso1@lSU.edu*/

function setup() {
	createCanvas(200, 200);
}

function star(x, y){
	beginShape()
	vertex(x+50, y-10);
	vertex(x+15, y+5);//
	vertex(x+30, y+40);
	vertex(x, y+20);
	vertex(x-30, y+40);
	vertex(x-15, y+5);//
	vertex(x-50, y-10);
	vertex(x-10, y-10); 
	vertex(x, y-50);
	vertex(x+10, y-10);
	endShape(CLOSE);
}

function draw() {
	background(0, 0, 150);
	strokeWeight(3);
	stroke(255, 255, 255);
	fill(50, 140, 0);
	ellipse(100, 100, 100, 100, 30);
	fill(255, 0, 0);
	star(100, 100);
}