useful p5 Commands

mouseButton == LEFT
mouseButton == RIGHT

mouseX
mouseY

function preload(){
	turtle = loadImage("turtle.png");
}

function mousePressed(){
	/* toDo*/
}

function mouseReleased(){
	/* toDo*/
}

function keyPressed(){
	if(keyCode === SHIFT){
		targetIsVisible = true;
	}
}

function keyReleased(){
	if(keyCode === SHIFT){
		targetIsVisible = false;
	}
}

function mousePressed(){
	targetIsVisible = true;
}

function mouseReleased(){
	targetIsVisible = false;
}