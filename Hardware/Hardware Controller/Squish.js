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
var squishSound;
var freeverb;
var lfo;
var spiderNoise;
var themeMusic;
var introSong;
var gameOverSong;
var youWinSong;

var serial;
var portName = 'COM3';
var inData;
var outByte = 0;

var crossY = 0;
var lastInData;


function preload(){
	for(var i = 0; i < count; i++){
		spider[i] = new Walker("SpiderSprite.png", random(560) + 40, random(400) +20, random([-1, +1]), alive);
	}

	//Audio Preload
	gameAudio = new Tone.Player("media/BugSong.mp3").toMaster();
	themeMusic = new Tone.Player("media/ThemeSong.mp3").toMaster();
	introSong = new Tone.Player("media/IntroSong.mp3").toMaster();
	gameOverSong = new Tone.Player("media/GameOverSong.mp3").toMaster();
	youWinSong = new Tone.Player("media/YouWinSong.mp3").toMaster();
	squishSound = new Tone.NoiseSynth();
	squishSound.volume.value = +6;
	freeverb = new Tone.Freeverb().toMaster();
	freeverb.roomSize = .2;
	squishSound.connect(freeverb);
	lfo = new Tone.LFO(10, -64, -35).start();
	spiderNoise = new Tone.Noise().toMaster();
	lfo.connect(spiderNoise.volume);
}

function setup() {
	createCanvas(640, 480);
	imageMode(CENTER);
	gameAudio.autostart = false;
	themeMusic.autostart = false;
	introSong.autostart = true;
	introSong.loop = true;
	gameOverSong.loop = true;
	youWinSong.loop = true;

	serial = new p5.SerialPort();
	serial.on('list', printList);       // set a callback function for the serialport list event
	serial.on('connected', serverConnected); // callback for connecting to the server
	serial.on('open', portOpen);        // callback for the port opening
	serial.on('data', serialEvent);     // callback for when new data arrives
	serial.on('error', serialError);    // callback for errors
	serial.on('close', portClose);      // callback for the port closing

	serial.list();                      // list the serial ports
	serial.open(portName);              // open a serial port
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
	fill(255, 255, 255);
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
				introSong.stop();
				gameAudio.start();
				spiderNoise.start();
				startTime = second();
				gameState = 1;
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
		crossY = inData * 2;
		cross(crossY);
		if(inData < 255){
			lastInData = inData;
		}
		if(inData == 255){
			crossPressed(lastInData);
		}
		if(timeRemaining == 0){
			gameAudio.stop();
			spiderNoise.stop();
			gameOverSong.start();
			gameState = 3;

		}
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
		gameAudio.stop();
		spiderNoise.stop();
		youWinSong.start();
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
					gameAudio.volume.value = -20;
				}
				if(score >= 5 && score <= 10){
					animationSpeed = 2;
					gameAudio.volume.value = -5;
				}
				if(score > 10 && score < 15){
					animationSpeed = 1;
					gameAudio.volume.value = +10;
				}
				if(score >= 15){
					animationSpeed = .5;
					gameAudio.volume.value = +25;
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
		y = y*2;
		if(this.x -40 < x && x < this.x + 40 &&
	 		this.y -40 < y && y < this.y + 40 ){
			this.moving = 0;
			this.mouseX = x;
			this.mouseY = y;
			this.initialX = this.x;
			this.initialY = this.y;
			if(this.alive == true){
				score++;
				squishSound.triggerAttackRelease("16n");
			}
			this.alive = false;
		}
	}
}

function cross(y){
	ellipse(300, y, 15, 15);
	fill(255, 0 ,0);
	ellipse(300, y, 8, 8);
}

function crossPressed(y){
	// text("crossPressed[" + y +"]", 200, 300);
	for(var i = 0; i < count; i++){
		spider[i].squish(300, y);
	}
}

//Functions below are for serial port
function printList(portList) {
	// portList is an array of serial port names
	for (var i = 0; i < portList.length; i++)
	{
	  // Display the list the console:
	  text(i + " " + portList[i]);
	}
}

function serverConnected() {
  text('connected to server.');
}

function portOpen() {
  text('the serial port opened.')
}

function serialEvent() {
  // read a byte from the serial port, convert it to a number:
  inData = Number(serial.read());
}

function serialError(err) {
  text('Something went wrong with the serial port. ' + err);
}

function portClose() {
  text('The serial port closed.');
}