var title = "Basic Synthesis";
var synth;
var synth2;
var mSynth;
var fmSynth;
var plucky;
var polyS;

function setup() {
	createCanvas(600,400);

	mSynth = new Tone.MonoSynth({
		"oscillator":{
			"type" : "square"
		},
		"envelope": {
			"attack" : 0.7
		}
	}).toMaster();


	synth = new Tone.Synth({
		"oscillator":{
			"type":"triangle"
		},
		"envelope":{
			attack:0.005,
			decay: 0.1,
			sustain:0.3,
			release:1
		}
	}).toMaster();

	synth.envelope.attack = 2;
	synth2 = new Tone.Synth().toMaster;

	synth.triggerAttackRelease("C4", 3);
	synth2.triggerAttackRelease("G4", "4n");

	fmSynth = new Tone.FMSynth().toMaster();
	fmSynth.modulationIndex = 20;

	plucky = new Tone.PluckSynth().toMaster();

	polyS = new Tone.PolySynth().toMaster();
	polyS = new Tone.PolySynth(6, Tone.Synth).toMaster();
	polyS.set("detune", -1200);
}

function keyPressed() {
	console.log("Key is:", keyCode);
	//if #1 is pressed
	if (keyCode == 49)
	{
		mSynth.triggerAttackRelease("E4", "8n");
	}
	//if #2 is pressed
	if (keyCode == 50)
	{
		fmSynth.triggerAttackRelease("D5", "4n");
	}
	//if #3 is pressed
	if (keyCode == 51)
	{
		plucky.triggerAttack("E5");
	}
	//if #4 is pressed
	if (keyCode == 52)
	{
		polyS.triggerAttackRelease(["C4", "E4", "A4",], "4n");
		polyS.triggerAttackRelease(["G4", "F4", "B3",], "4n", "+1");
	}
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
	fmSynth.harmonicity.value = mx * 8.0;
	var my = mouseY / height;
	plucky.dampening.value = (my * 6000) + 500;
	plucky.resonance.value = mx;
}