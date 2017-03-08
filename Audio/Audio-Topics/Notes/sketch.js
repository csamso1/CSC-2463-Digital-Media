var title;
var osc;
var osc2;
var ampEnv;
// var synth1;
// var synth2;

function setup() {
	createCanvas(600, 400);

	/* OLD way of doing things
	synth1 = new Tone.Synth({
		oscillator:{
			type:"triangle"
		},
		envelope:{
			attack:0.005,
			decay:0.1,
			sustain:0.3,
			release:1
		}
	}).toMaster();

	synth1.envelope.attack = 2;

	synth2 = new Tone.Synth().toMaster();
	synth1.triggerAttackRelease("C4", 3);
	synth2.triggerAttackRelease("G5", "4n", +1, .8);*/

	//Creates Oscillator IMPORTANT TO START IT HERE!!! So sound is playing before envlope is applied
	
	osc = new Tone.Oscillator(440, "triangle").start();
	osc2 = new Tone.Oscillator(660, "sawtooth6").start();
	osc2.volume.value = -12;
	ampEnv = new Tone.AmplitudeEnvelope({
		"attack": 0.1,
		"decay": 0.2,
		"sustain": 1.0,
		"release": 0.8
	}).toMaster();

	osc.connect(ampEnv);
	osc2.connect(ampEnv);

	//Adjusts pitch by changing oscillator frequency value to B flat 4
	osc.frequency.value = 'Bb4';

	//Triggers the attach release on the envlope
	// ampEnv.triggerAttackRelease(2);

}

function draw() {
	background(0, 0, 155);
}

function keyPressed(){
	//If spacebar is pressed start at frequency C5 and move to D5 after .5 seconds
	if(keyCode == 32){
		osc.frequency.value = 'C5';
		osc.frequency.setValueAtTime('D5', +.5)
		ampEnv.triggerAttackRelease(1);
	}
	//If 'A' is pressed, OSC2 plays A1 for 2 seconds
	if(keyCode == 65){
		osc2.frequency.value = 'A1';
		ampEnv.triggerAttackRelease(2);
	}
	
	//Very useful command for identifing key ASCII Values
	console.log("Key is: " + keyCode);
}