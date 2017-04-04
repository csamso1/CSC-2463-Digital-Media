int incomingByte; //var to store incoming serial data

void setup() {
  Serial.begin(9600);
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  int potentiometer = analogRead(A0);
  int mappedPort = map(potentiometer, 0, 1023, 0, 255);
  Serial.write(mappedPort);
  delay(1);

  if(Serial.available() > 0){
    incomingByte = Serial.read();
    if(incomingByte == 1){
      digitalWrite(LED_BUILTIN, HIGH);
    }
    else{
      digitalWrite(LED_BUILTIN, LOW);
    }
  }
}


