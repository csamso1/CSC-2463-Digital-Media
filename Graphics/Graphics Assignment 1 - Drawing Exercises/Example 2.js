/*Clayton Samson*/
/*CSamso1@lSU.edu*/

function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(255, 255, 255);
	
	/*Red Ellipse*/
	var x = 80;
	var y = 50;
	var w = 90;
	var h = 90;
	var r = 255;
	var g = 0;
	var b = 0;
	var opacity = 80;
	fill(r, g, b, opacity)
	ellipse(x, y, w, h);
	
	/*Blue Ellipse */
	var r = 0;
	var g = 50;
	var b = 150;
	var opacity = 80;
	fill(r, g, b, opacity)
	x = 40;
	y = 110;
	w = 90;
	h = 90;
	ellipse(x, y, w, h);
	noStroke();
	
	/*Green Ellipse */
	x = 120;
	y = 110;
	w = 90;
	h = 90;
	var r = 0;
	var g = 150;
	var b = 0;
	var opacity = 80;
	fill(r, g, b, opacity)
	ellipse(x, y, w, h);
	
}