var title = "Basic Synthesis";

var synth;
var synth2;
var osc;
var ampEnv;
var oscNoise;
var ampEnvNoise;
var filt;
var lfo;
var lfo2;


function setup() {
	createCanvas(600,400);
	//Noise, can specify color of noise EX: Tone.Noise("color");
	oscNoise = new Tone.Noise().start();
	filt = new Tone.Filter(2000, "lowpass");
	/*lfo specfies the max and min values in volume in decibles
	used to controle the NOISE volume*/
	lfo = new Tone.LFO(10, -64, 0).start();
	lfo2 = new Tone.LFO(10, -100, 0).start();

	//Always need to START oscillator here, or else just sending all 0s
	osc = new Tone.Oscillator(440, "sine").start();
	osc2 = new Tone.Oscillator(660, "sawtooth6").start();

	//-12 in Decibels
	osc2.volume.value = -12;
	
	//Envelope tells the audio to scale in and out
	//Attack, decay, release specified in time, sustain is NormalRange
	ampEnv = new Tone.AmplitudeEnvelope({
		"attack": 0.1,
		"decay": 0.2,
		"sustain": 1.0,
		"release": 0.8
	}).toMaster();

	ampEnvNoise = new Tone.AmplitudeEnvelope({
		"attack" : .1,
		"decay" : 0.1,
		"sustain" : 4,
		"release" : 0.1
	}).toMaster();
	
	osc.connect(ampEnv);	
	osc2.connect(ampEnv);
	lfo2.connect(osc2.frequency);

	lfo.connect(oscNoise.volume);
	oscNoise.connect(filt);
	filt.connect(ampEnvNoise);
}

function keyPressed() {
	console.log("Key is:", keyCode);
	
	if (keyCode == 49){
		osc.frequency.value = 'C4';
		//Attack and Release that is one second long
		ampEnv.triggerAttackRelease(1.0);
		/*Numbers taken litterally as time in seconds, if specifing 
		relative time parameter must be specfied as a string*/
		osc.frequency.setValueAtTime('D5',"+0.5");
	} else if (keyCode == 50) {
		osc.frequency.value = 'D4';
		ampEnv.triggerAttackRelease(0.5);
	} else if (keyCode == 51) {
		osc.frequency.value = 'E4';
		ampEnv.triggerAttackRelease(0.5);
	} else if (keyCode == 52) {
		osc.frequency.value = 'F4';
		ampEnv.triggerAttackRelease(0.5);
	}
	else if(keyCode == 53){
		ampEnvNoise.triggerAttackRelease(0.2, "+0.5");
	}
	
}

function draw() {
  fill(255);
  		//Draws title
  		background(0, 0, 100);
  		fill(255, 255, 255);
  		textSize(30);
  		text("use # keys 1, 2, 3, 4, & 5 to play music!", 30, 170);
	    // rect(0,0,width,height);
	    // fill(200, 0, 255); 
	    // textAlign(10,10);
	    // text(title, 10, 50);
}









