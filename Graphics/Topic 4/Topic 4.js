var guy = [];
var count = 10;
var moving = 0;

function preload(){
	for(var i = 0; i < count; i++){
		guy[i] = new Walker("SpelunkyGuy.png", random(640), random(480), random([-1, +1]));
	}
}

function setup() {
	createCanvas(640, 480);
	imageMode(CENTER);
}

function draw(){
	background(0, 110, 0);
	for(var i = 0; i < count; i++){
		guy[i].draw();
	}
}

function Walker(imageName, x, y, moving){
	this.spritesheet = loadImage(imageName);
	this.frame = 0;
	this.x = x;
	this.y = y;
	this.moving = moving;
	this.facing = moving;

	this.draw = function() {
		push();

		translate(this.x, this.y);
		if(this.facing < 0){
			scale(-1.0, 1.0);
		}

		if(this.moving == 0){
			image(this.spritesheet, 0, 0, 80, 80, 0, 0, 80, 80);
		}
		else{
			if(this.frame == 0){
				image(this.spritesheet, 0, 0, 80, 80, 80, 0, 80, 80);
			}
			if(this.frame == 1){
				image(this.spritesheet, 0, 0, 80, 80, 160, 0, 80, 80);
			}
			if(this.frame == 2){
				image(this.spritesheet, 0, 0, 80, 80, 240, 0, 80, 80);
			}
			if(this.frame == 3){
				image(this.spritesheet, 0, 0, 80, 80, 320, 0, 80, 80);
			}
			if(this.frame == 4){
				image(this.spritesheet, 0, 0, 80, 80, 400, 0, 80, 80);
			}
			if(this.frame == 5){
				image(this.spritesheet, 0, 0, 80, 80, 480, 0, 80, 80);
			}
			if(this.frame == 6){
				image(this.spritesheet, 0, 0, 80, 80, 560, 0, 80, 80);
			}
			if(this.frame == 7){
				image(this.spritesheet, 0, 0, 80, 80, 640, 0, 80, 80);
			}

			//Main Logic code
			if(frameCount % 4 == 0){
				this.frame = (this.frame + 1) % 8;
				this.x = this.x + 6 * this.moving;
				if(this.x < 40 || this.x > width - 40){
					this.moving = -this.moving
					this.facing = -this.facing
				}
				// if(this.x > width - 40){
				// 	this.moving = -1;
				// 	this.facing = -1;
				// }
			}
		}

		pop();
	}

	this.stop = function(){
		this.moving = 0;
		this.frame = 3;
	}

	this.go = function(direction){
		this.moving = direction;
		this.facing = direction;
	}

	this.grab = function(x, y){
		if(this.x -40 < x && x < this.x + 40 &&
			this.y -40 < y && y < this.y + 40 ){
			this.stop();
			this.mouseX = x;
			this.mouseY = y;
			this.initialX = this.x;
			this.initialY = this.y;
		}
	}

	this.drag = function(x, y){
		if(this.moving == 0){
			this.x = (x - this.mouseX) + this.initialX;
			this.y = (y - this.mouseY) + this.initialY;
		}
	}

	this.drop = function(){
		this.go(this.facing);
	}
}

function mousePressed(){
	for(var i = 0; i < count; i++){
		guy[i].grab(mouseX, mouseY);
	}
}

function mouseReleased(){
	for(var i = 0; i < count; i++){
		guy[i].drop();
	}
}

function mouseDragged(){
	for(var i = 0; i < count; i++){
		guy[i].drag(mouseX, mouseY);
	}
}


// function keyPressed(){
// 	if(keyCode === RIGHT_ARROW){
// 		for(var i = 0; i < count; i++){
// 			guy[i].go(+1);
// 		}
// 	}
// 	if(keyCode === LEFT_ARROW){
// 		for(var i = 0; i < count; i++){
// 			guy[i].go(-1);
// 		}
// 	}
// }

// function keyReleased(){
// 	if(keyCode === RIGHT_ARROW){
// 		for(var i = 0; i < count; i++){
// 			guy[i].stop();
// 		}
// 	}
// 	if(keyCode === LEFT_ARROW){
// 		for(var i = 0; i < count; i++){
// 			guy[i].stop();
// 		}
// 	}
// }