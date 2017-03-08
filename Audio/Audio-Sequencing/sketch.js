var title = "Sequencing";

var synth;
var hhSynth;
var drumSynth;
var bassSynth;
var hhLoop;
var chordLoop;
var isPlaying = false;
var part;
var seq;

function setup() {
	createCanvas(600,400);

	//have to start it or time doesn't run
	Tone.Transport.bpm.value = 120;
	Tone.Transport.loop = true;
	Tone.Transport.loopEnd = '2m';

	synth = new Tone.PolySynth(4, Tone.MonoSynth).toMaster();
	synth.volume.value = -12;

	hhSynth = new Tone.MetalSynth().toMaster();

	Tone.Transport.schedule(triggerSynth, 0);

	//Loops
	hhLoop = new Tone.Loop(function(time){
		hhSynth.triggerAttackRelease("16n", time);
	}, "16n");
	hhLoop.probability = .8;
	hhLoop.start('1m').stop('3m');

	chordLoop = new Tone.Loop(function(time){
		synth.triggerAttackRelease(['a3', 'c4', 'e4'],"2n", time);
		synth.triggerAttackRelease(['e3', 'g#4', 'e4'],"2n", "+2n");
	}, "2n");
	chordLoop.start('1m').stop('3m');

	//Parts
	part = new Tone.Part(function(time, event){
		//the events will be given to the callback with the time they occur
		synth.triggerAttackRelease(event.note, event.dur, time)
	}, [{ time : 0, note : 'C4', dur : '4n'},
		{ time : '4n + 8n', note : 'E4', dur : '8n'},
		{ time : '2n', note : 'G4', dur : '16n'},
		{ time : '2n + 8t', note : 'B4', dur : '4n'}]);
	part.start(0);

	//Sequences

	seq = new Tone.Sequence(synthNotes, ['a3', 'b3', 'c3', 'e4', 'f4', 'e4', null], '8n');
	seq.start('2n').stop('3m+2n');
}

function synthNotes(time, note)
{
	synth.triggerAttackRelease(note, '8n', time);
}

function triggerSynth(time)
{
	synth.triggerAttackRelease('C2', '8n', time);
}

function keyPressed() {
	console.log("Key is:", keyCode);

	//if #1 is pressed
	if (keyCode == 49)
	{
		if(isPlaying){
			Tone.Transport.stop();
			isPlaying = false;
		}
		else{
			Tone.Transport.start();
			isPlaying = true;
		}
		
	}

	//if #2 is pressed
	if (keyCode == 50)
	{

	}

	//if #3 is pressed
	if (keyCode == 51)
	{

	}

	//if #4 is pressed
	if (keyCode == 52)
	{

	}
}

function draw() {
	fill(255);
	//Draws title
	background(0, 0, 100);
	fill(255, 255, 255);
	textSize(30);
	text("Sequencing!", 30, 170);
}