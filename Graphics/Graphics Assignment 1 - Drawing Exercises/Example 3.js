/*Clayton Samson*/
/*CSamso1@lSU.edu*/

function setup() {
	createCanvas(200, 100);
}

function eye(x, y){
	fill(255, 255, 255);
	ellipse(x, y, 25, 25);
	fill(0, 0, 255);
	ellipse(x, y, 15, 15);
}

function draw() {
	var red = 0;
	var green = 0
	var blue = 0;
	background(red, green, blue);
	var a = 50;
	var b = 50;
	var c = 80;
	var d = 80;
	var start = PI+QUARTER_PI;
	var stop = 2*PI+HALF_PI+QUARTER_PI;
	fill(255, 255, 0);
	arc(a, b, c, d, start, stop)
	var e = 140;
	var f = 50
	var height = 80;
	start2 = PI;
	stop2 = 0;
	fill(255, 0, 0);
	arc(e, f, c, height, start2, stop2, CHORD);
	fill(255, 0, 0);
	rect(100, 50, 80, 40);
	noStroke();
	eye(160, 50);
	eye(120, 50);
}