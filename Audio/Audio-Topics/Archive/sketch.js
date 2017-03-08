var title = "Basic Synthesis";

var synth;
var synth2;
var mSynth;
var fmSynth;

function setup() {
	createCanvas(600,400);

	mSynth = new Tone.MonoSynth({
		"oscillator" : {
			"type" : "square"
		}
		"envelope" : {
			"attack" : 0.7
		}
	}).toMaster();


	synth = new Tone.Synth({
		oscillator:{
			"type":"triangle"
		},
		envelope:{
			attack:0.005,
			decay: 0.1,
			sustain:0.3,
			release:1
		}
	}).toMaster();

	synth.envelope.attack = 2;
	synth2 = new Tone.Synth().toMaster;

	synth.triggerAttackRelease('C4', 3);
	synth2.triggerAttackRelease('G4', '4n', 0.5);

	fmSynth = new Tone.FMSynth().toMaster();
	fmSynth.modulationIndex = 20;
}

function keyPressed() {
	console.log("Key is:", keyCode);
	//if #1 is pressed
	if (keyCode == 49)
	{
		mSynth.triggerAttackRelease("C4", "8n");
	}
	//if #2 is pressed
	if (keyCode == 50)
	{
		fmSynth.triggerAttackRelease("C5", "4n");
	}
	// //if #3 is pressed
	// if (keyCode == 51)
	// {

	// }
	// //if #4 is pressed
	// if (keyCode == 52)
	// {

	// }
	// //if #5 is pressed
	// if(keyCode == 53){

	// }
}

function draw() {
	fill(255);
	//Draws title
	background(0, 0, 100);
	fill(255, 255, 255);
	textSize(30);
	text("use # keys 1, 2, 3, 4, & 5 to play music!", 30, 170);

	//always gives a number between 0 and 1
	var mx = mouseX / width;

}