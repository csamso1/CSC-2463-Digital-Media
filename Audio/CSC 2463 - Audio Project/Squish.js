//Clayton Samson
//CSC 2264 Bug Squish Project

var spider = [];
var count = 50;
var moving = 0;
var score = 0;
var alive = true;
var s = 0;
var timeRemaining = 30;
var startTime = 0;
var gameState = 0; //sets game state to start screen
var animationSpeed = 4;
var previousScore = score;
var gameAudio;

function preload(){
	for(var i = 0; i < count; i++){
		spider[i] = new Walker("SpiderSprite.png", random(560) + 40, random(400) +20, random([-1, +1]), alive);
	}

	gameAudio = new Tone.Player("BugSong.mp3").toMaster();
}

function setup() {
	createCanvas(640, 480);
	imageMode(CENTER);

	gameAudio.autostart = false;
}

function clicked(){
	if(mouseIsPressed){
		click = true;
	}
	else{
		click = false;
	}
	return false;
}

function draw(){
	background(0, 110, 0);
	if (gameState == 0){
			textSize(50);
			fill(255, 255, 255);
			text("Spider Squish", 130, 100);
			fill(255, 255, 255);
			textSize(22);
			text("Play Game", 240, 230);
			fill(0, 0, 150, 50);
			rect(230, 200, 130, 50);
			if(mouseX >= 230 && mouseX <= 330 && mouseY >= 200 && mouseY <=250 && click == true){
				gameState = 1;
				startTime = second();
			}
		}
	//Set game to play state
	if(gameState == 1){
		s = second();
		timeRemaining = 30-abs(startTime - s);
		for(var i = 0; i < count; i++){
			spider[i].draw();
			textSize(24);
		}
		text("Score: " + score, 520, 30);
		fill(255, 255, 255);
		text("Time Remaining: " + timeRemaining, 400, 450);
		if(timeRemaining == 0){
			gameState = 3;
		}

		gameAudio.start();
	}
	if(gameState == 3){
		fill(255, 255, 255);
		textSize(40);
		text("Game Over", 200, 120);
		textSize(22);
		text("Spiders Squished: " + score, 205, 200);
		textSize(12);
		text("Refresh the page to play again.", 230, 400);
	}
	if(score == 50){
		gameState = 4; //set game state to 'You Win' mode
	}
	if(gameState == 4){
		textSize(50);
		text("You Win!!!", 200, 120);
		textSize(22);
		text("Spiders Squished: " + score, 205, 200);
		textSize(12);
		text("Refresh the page to play again.", 230, 400);
	}
	clicked();
}

function Walker(imageName, x, y, moving, alive){
	this.spritesheet = loadImage(imageName);
	this.frame = 0;
	this.x = x;
	this.y = y;
	this.moving = moving;
	this.facing = moving;
	this.alive = alive

	this.draw = function() {
		push();

		translate(this.x, this.y);
		if(this.facing < 0){
			scale(-1.0, 1.0);
		}
		if(this.alive == true){
			if(this.moving == 0){
				image(this.spritesheet, 0, 0, 80, 80, 0, 0, 80, 80);
			}
			else{
				if(this.frame == 0){
					image(this.spritesheet, 0, 0, 80, 80, 0, 0, 80, 80);
				}
				if(this.frame == 1){
					image(this.spritesheet, 0, 0, 80, 80, 80, 0, 80, 80);
				}
				if(this.frame == 2){
					image(this.spritesheet, 0, 0, 80, 80, 160, 0, 80, 80);
				}
				if(this.frame == 3){
					image(this.spritesheet, 0, 0, 80, 80, 240, 0, 80, 80);
				}
				if(this.frame == 4){
					image(this.spritesheet, 0, 0, 80, 80, 320, 0, 80, 80);
				}
				if(this.frame == 5){
					image(this.spritesheet, 0, 0, 80, 80, 400, 0, 80, 80);
				}
				if(this.frame == 6){
					image(this.spritesheet, 0, 0, 80, 80, 480, 0, 80, 80);
				}
				if(this.frame == 7){
					image(this.spritesheet, 0, 0, 80, 80, 560, 0, 80, 80);
				}

				//Main Logic code
				if(score >= 0 && score < 5){
					animationSpeed = 3;
				}
				if(score >= 5 && score <= 10){
					animationSpeed = 2;
				}
				if(score > 10 && score < 15){
					animationSpeed = 1;
				}
				if(score >= 15){
					animationSpeed = .5;
				}

				if(frameCount % animationSpeed == 0){
					this.frame = (this.frame + 1) % 8;
					this.x = this.x + 6 * this.moving;
					if(this.x < 40 || this.x > width - 40){
						this.moving = -this.moving
						this.facing = -this.facing
					}
				}
			}
		}
		else{
			image(this.spritesheet, 0, 0, 80, 80, 640, 0, 80, 80);
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

	this.squish = function(x, y){
		if(this.x -40 < x && x < this.x + 40 &&
	 		this.y -40 < y && y < this.y + 40 ){
			this.moving = 0;
			this.mouseX = x;
			this.mouseY = y;
			this.initialX = this.x;
			this.initialY = this.y;
			if(this.alive == true){
				score++;
			}
			this.alive = false;
		}
	}
}

function mousePressed(){
	for(var i = 0; i < count; i++){
		spider[i].squish(mouseX, mouseY);
	}
}

// function mouseReleased(){
// 	for(var i = 0; i < count; i++){
// 		spider[i].drop();

// 	}
// }