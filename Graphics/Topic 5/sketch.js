var thing;

function preload(){
	thing = loadModel("untitled.obj", true);
}
function setup() {
	createCanvas(640, 480, WEBGL);
}

function draw() {
	background(169);
	pointLight(255, 255, 255, 500, 500, 0);
	rotateX(radians(mouseY));
	rotateY(radians(mouseX));
	specularMaterial(255, 0, 0);
	model(thing);
}