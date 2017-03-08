var lineColor = [0, 0, 0];
var click = false;

function setup() {
	createCanvas(600, 400);
	background(0, 0, 100, 30);

}

function mouseClicked(){
	if(mouseIsPressed){
		click = true;
	}
	else{
		click = false;
	}
	return false;
}

function draw() {
	fill(255, 0, 0);
	rect(0, 0, 20, 20);
	fill(0, 255, 0);
	rect(0, 20, 20, 20);
	fill(0, 0, 255);
	rect(0, 40, 20, 20);
	fill(0, 0, 0);
	rect(0, 60, 20, 20);
	if(mouseX >= 0 && mouseX <=20 && mouseY >= 0 && mouseY <= 20 && click == true){
		lineColor = [255, 0, 0];
	}
	if(mouseX >= 0 && mouseX <=20 && mouseY >= 20 && mouseY <= 40 && click == true){
		lineColor = [0, 255, 0];
	}
	if(mouseX >= 0 && mouseX <=20 && mouseY >= 40 && mouseY <= 60 && click == true){
		lineColor = [0, 0, 255];
	}
	if(mouseX >= 0 && mouseX <=20 && mouseY >= 60 && mouseY <= 80 && click == true){
		lineColor = [0, 0, 0];
	}
	if(mouseIsPressed){
		line(pmouseX, pmouseY, mouseX, mouseY);
		stroke(lineColor);
	}
	if(mouseClicked()){
		//background(0, 255, 0);
	}
	print(mouseX, mouseY);
	print("Click = " + click);
	print("Line Color = " + lineColor);
}