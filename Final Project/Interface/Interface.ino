//Clayton Samson
//csamso1@lsu.edu
//Digital Media Final Project
//YouTube Video Link: https://www.youtube.com/watch?v=NyswQmWiLIQ

int xVal;
int yVal;
int incomingX;
int incomingY;
int incomingByte;

void setup() {
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  incomingX = analogRead(A0);
  incomingY = analogRead(A1);
  xVal = map(incomingX, 0, 1023, 40, 660);
  yVal = map(incomingY, 0, 1023, 40, 460);
  Serial.print(xVal);
  Serial.print(',');
  Serial.println(yVal);
}
