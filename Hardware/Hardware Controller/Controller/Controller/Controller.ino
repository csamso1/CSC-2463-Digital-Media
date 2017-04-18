//Clayton Samson
//YouTube Video Link:

int incomingByte; //var to store incoming serial data
const int BUTTON = 7; //Input pin for the button
int buttonVal = 0;

void setup() {
  Serial.begin(9600);
  pinMode(BUTTON, INPUT);  //Tells Arduino that the button is an input

}

void loop() {
  int potentiometer = analogRead(A0);
  buttonVal = digitalRead(BUTTON); //Read input value and store it
  int mappedPort = map(potentiometer, 0, 1023, 0, 240);
//  int mappedPort = map(potentiometer, 0, 1023, 0, 480);
  Serial.write(mappedPort);

  if(buttonVal == HIGH){
    Serial.write(255);
  }  
  
  delay(1);
}
