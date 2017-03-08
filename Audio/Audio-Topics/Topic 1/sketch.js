var synth;

function setup() {
	createCanvas(600, 400);
	synth = new Tone.Synth().toMaster();
}

function draw() {
	fill(255);
	synth.triggerAttackRelease("C4", "8n");
}