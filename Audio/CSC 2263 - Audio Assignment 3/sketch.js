var title = "Basic Synthesis";
var saucer;
var synth;
var synth2;
var osc;
var ampEnv;
var oscNoise;
var ampEnvNoise;
var filt;
var lfo;
var lfo2;

function preload()
{
	saucer = loadImage("FlyingSaucer.jpg");
}

function setup() 
{
	createCanvas(600,520);

	/*lfo specfies the max and min values in volume in decibles
	used to controle the NOISE volume*/
	lfo = new Tone.LFO(5, -0, 100).start();
	lfo2 = new Tone.LFO(10, -100, 0).start();

	//Always need to START oscillator here, or else just sending all 0s
	osc = new Tone.Oscillator(550, "sawtooth6").start();
	
	// //Noise, can specify color of noise EX: Tone.Noise("color");
	oscNoise = new Tone.Noise("blue").start();

	//Envelope tells the audio to scale in and out
	//Attack, decay, release specified in time, sustain is NormalRange
	ampEnv = new Tone.AmplitudeEnvelope({
		"attack": 0.1,
		"decay": 0.2,
		"sustain": 4.0,
		"release": 0.8
	}).toMaster();

	ampEnvNoise = new Tone.AmplitudeEnvelope({
		"attack" : 0.05,
		"decay" : 0.1,
		"sustain" :1,
		"release" : 0.5
	}).toMaster();
	
	osc.connect(ampEnv);
	lfo.connect(osc.frequency);
	oscNoise.connect(ampEnvNoise);
}

function draw()
{
  fill(255);
	//Draws title
	background(0, 0, 100);
	fill(255, 255, 255);
	textSize(30);
	text("Press and hold the mouse\nto see and hear something awesome!", 30, 170);

	if(mouseIsPressed == true)
	{
		image(saucer, 10, -40);
		ampEnv.triggerAttackRelease(1.0);
	}
}

function mouseReleased()
{
	ampEnvNoise.triggerAttackRelease(.3);
}