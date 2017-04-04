void setup() {
  Serial.begin(9600);
}

void loop() {
  int potentiometer = analogRead(A0);
  int mappedPort = map(potentiometer, 0, 1023, 0, 255);
  Serial.write(mappedPort);
  delay(1);
}
