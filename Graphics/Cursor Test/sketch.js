function setup() {
	createCanvas(600, 480);

}

function draw() {
	background(0, 150, 0);
	cross(50);
  
}

function cross(y){
	ellipse(300, y, 15, 15);
	fill(255, 0 ,0);
	ellipse(300, y, 8, 8);
}