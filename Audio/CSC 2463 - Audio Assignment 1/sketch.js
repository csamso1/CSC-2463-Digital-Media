//Clayton Samson
//CSamso1@lsu.edu

var player1;
var player2;
var player3;
var player4;
var distortion;
var playButton;
var stopButton;
var distortionOn = false;
var distortionAmmount = .5;

function preload(){
	distortion = new Tone.Distortion(distortionAmmount).toMaster();
	player1 = new Tone.Player("media/DJCropped.mp3").toMaster();
	player2 = new Tone.Player("media/BobCropped.mp3").toMaster();
	player3 = new Tone.Player("media/ColdWarKidsCropped.mp3").toMaster();
	player4 = new Tone.Player("media/WizCropped.mp3").toMaster();
}

function setup() {
	createCanvas(600, 400);
	player1.autostart = false;
	player2.autostart = false;
	player3.autostart = false;
	player4.autostart = false;

	playButton1 = createButton('Play Song 1');
	playButton1.position(19, 10);
	playButton1.mousePressed(play1);
	stopButton1 = createButton('Stop Song 1');
	stopButton1.position(19, 35);
	stopButton1.mousePressed(stop1);

	playButton2 = createButton('Play Song 2');
	playButton2.position(19, 65);
	playButton2.mousePressed(play2);
	stopButton2 = createButton('Stop Song 2');
	stopButton2.position(19, 90);
	stopButton2.mousePressed(stop2);

	playButton3 = createButton('Play Song 3');
	playButton3.position(19, 125);
	playButton3.mousePressed(play3);
	stopButton3 = createButton('Stop Song 3');
	stopButton3.position(19, 150);
	stopButton3.mousePressed(stop3);

	playButton4 = createButton('Play Song 4');
	playButton4.position(19, 185);
	playButton4.mousePressed(play4);
	stopButton4 = createButton('Stop Song 4');
	stopButton4.position(19,210);
	stopButton4.mousePressed(stop4);
}


function draw() {
	background(0, 0, 100);

	//Distortion Button
	if(distortionOn == false){
		fill(150, 0, 0);
	}
	else{
		fill(0, 150, 0);
	}
	rect(150, 20, 100, 100);

	//Reset Distortion button
	rect(260, 20, 100, 100);

	//Increase Distortion button
	rect(150, 130, 100, 100);

	//Decrease Distortion button
	rect(260, 130, 100, 100);

	//Button Labels
	fill(255, 255, 255);
	text("Toggle \nDistortion", 153, 45);
	text("Reset \nDistortion", 263, 45);
	text("Increase \nDistortion", 153, 145);
	text("Decrease \nDistortion", 263, 145);
}

//Play and Stop funtions
function play1(){
	player1.start();
}

function stop1(){
	player1.stop();
}

function play2(){
	player2.start();
}

function stop2(){
	player2.stop();
}

function play3(){
	player3.start();
}

function stop3(){
	player3.stop();
}

function play4(){
	player4.start();
}

function stop4(){
	player4.stop();
}

function mouseClicked(){
	if(mouseX >= 150 && mouseX <= 250 && mouseY >= 20 && mouseY <= 120){
		print("Distortion clicked!");
		distortionOn = !distortionOn;
		if(distortionOn == true){
			player1.connect(distortion);
			player2.connect(distortion);
			player3.connect(distortion);
			player4.connect(distortion);
		}
		else{
			player1.disconnect(distortion);
			player1.toMaster();
			player2.disconnect(distortion);
			player2.toMaster();
			player3.disconnect(distortion);
			player3.toMaster();
			player4.disconnect(distortion);
			player4.toMaster();
		}
	}

	//Increase Distortion Button Logic
	if(mouseX >= 150 && mouseX <= 250 && mouseY >= 130 && mouseY <= 230){
		print("Increase Distortion Pressed!");
		if(distortionAmmount >= .9){
			print("Can not increase diston beyond 100%");
		}
		else{
			distortionAmmount = distortionAmmount + .1;
			distortion.distortion = distortionAmmount;
			print("Distortion increased! Current distortion value: " + distortionAmmount);
		}
	}

	//Decrease Distortion button logic
	if(mouseX >= 260 && mouseX <= 360 && mouseY >= 130 && mouseY <= 230){
		print("Increase Distortion Pressed!");
		if(distortionAmmount <= .2){
			print("Can not decrease diston below 100%");
		}
		else{
			distortionAmmount = distortionAmmount - .1;
			distortion.distortion = distortionAmmount;
			print("Distortion decreased! Current distortion value: " + distortionAmmount);
		}
	}

	//Reset Distortiong button logic
	if(mouseX >= 260 && mouseX <= 360 && mouseY >= 20 && mouseY <= 120){
		distortionAmmount = .5;
		distortion.distortion = distortionAmmount
		print("Distortion Reset to default values!");
	}
}