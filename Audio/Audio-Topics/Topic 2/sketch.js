var player;
var distortion;
var playButton;
var stopButton;
var vibrato;

function preload(){
	distortion = new Tone.Distortion(0.5).toMaster();
	//vibrato - An amplitude modulation effect
	vibrato = new Tone.Vibrato(
	{
		"frequency" : 0.6,
		"depth" : 0.7
	});
	player = new Tone.Player("DJ_SNAKE.mp3");
	distortion.toMaster();
	vibrato.connect(distortion);
	player.connect(vibrato);
}

function setup() {
	createCanvas(600, 400);
	// synth.triggerAttackRelease(440, 2);

	//Or could have used below
	// player.connect(distortion);
	// distortion.connect.toMaster();
	//GENERAL NOTE: if ~ (Signal) use .value
	distortion.wet.value = 1;
	player.autostart = false;
	player.playbackRate = 1;
	
	// player = new Tone.Player("DJ_SNAKE.mp3").connect(vibrato);

	playButton = createButton('Play Song');
	playButton.position(19, 19);
	playButton.mousePressed(play);
	stopButton = createButton('Stop Song');
	stopButton.position(19, 45);
	stopButton.mousePressed(stop);
}

function draw() {
	fill(255);
	// synth.triggerAttackRelease("C4", "8n");
	fill(0, 0, 160);
	rect(100, 100, 100, 100);
	text("Play Song", 80, 80);
}

function play(){
	player.start();
}

function stop(){
	player.stop();
}