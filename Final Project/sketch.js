//Clayton Samson
//csamso1@lsu.edu
//Digital Media Final Project
//YouTube Video Link: https://www.youtube.com/watch?v=NyswQmWiLIQ

var lineColor = [0, 0, 0];
var click = false;
var lineSize = 3;
//Serial Communication Vars
var serial;
var portName = 'COM3';
var inData;
var inString;
var inArray;
var pInString;
var outByte = 0;
var lastInData;
var cursorX;
var cursorY;
var lastCursorX;
var lastCursorY;
var music;

function preload(){
	//Audio preload
	freeverb = new Tone.Freeverb().toMaster();
	music = new Tone.Player("media/song.mp3").connect(freeverb);
}

function setup() {
	createCanvas(700, 500);
	background(0, 0, 30, 30);	
	//Serial Port Setup
	serial = new p5.SerialPort();
	serial.on('list', printList);       // set a callback function for the serialport list event
	serial.on('connected', serverConnected); // callback for connecting to the server
	serial.on('open', portOpen);        // callback for the port opening
	serial.on('data', serialEvent);     // callback for when new data arrives
	serial.on('error', serialError);    // callback for errors
	serial.on('close', portClose);      // callback for the port closing
	serial.list();                      // list the serial ports
	serial.open(portName);              // open a serial port
	lastCursorX = cursorX;
	lastCursorY = cursorY;
	music.autostart = true;
	music.loop = true;
}

function draw() {
	brush(cursorX, cursorY);
	noStroke();
	fill(0, 0, 200);
	rect(0, 0, 40, 700);
	rect(0, 0, 700, 40);
	rect(660, 0, 700, 500);
	rect(0, 460, 700, 500);
}

function brush(x, y){
	fill(0, 50, 0);
	stroke(lineColor);
	strokeWeight(lineSize);
	line(lastCursorX, lastCursorY, x, y);
	lastCursorX = x;
	lastCursorY = y;
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
  // To bring in an value (String) larger than 255 we will need to use serial.***(); something else other than read
  //inData = Number(serial.read());
  inString = serial.readLine();
  if(!inString){
  	return;
  }
  inArray = splitTokens(inString, ",");
  cursorX = parseInt(inArray[0]);
  cursorY = parseInt(inArray[1]);
	console.log('cursorX = '+cursorX+' cursorY = '+cursorY);
	console.log('inArray = '+inArray);
	console.log('inString = '+inString);
}

function serialError(err) {
  text('Something went wrong with the serial port. ' + err);
}

function portClose() {
  text('The serial port closed.');
}