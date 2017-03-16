/**
 * @author Clayton Samson
 * csamso1@lsu.edu
 * 3/16/2017
 * YouTube Link showing LED working: https://www.youtube.com/watch?v=vuElHKMHmYk
 */
 
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);

  //Prints string 'message' in morse code to LED
  //**Note only works with lowercase letters and whole numbers**
  String message = "i love digital media";
  int i = 0;
  while(i <= message.length()){
    switch(message.charAt(i)){
      case ' ':
        delay(300);
        break;
      case 'a':
        dot(); dash();
        break;
      case 'b':
        dash(); dot(); dot(); dot();
        break;
      case 'c':
        dash(); dot(); dash(); dot();
        break;
      case 'd':
        dash(); dot(); dot();
        break;
      case 'e':
        dot();
        break;
      case 'f':
        dot(); dot(); dash(); dot();
        break;
      case 'g':
        dash(); dash(); dot();
        break;
      case 'h':
        dot(); dot(); dot(); dot();
        break;
      case 'i':
        dot(); dot();
        break;
      case 'j':
        dot(); dash(); dash(); dash();
        break;
      case 'k':
        dash(); dot(); dash();
        break;
      case 'l':
        dot(); dash(); dot(); dot();
        break;
      case 'm':
        dash(); dash();
        break;
      case 'n':
        dash(); dot();
        break;
      case 'o':
        dash(); dash(); dash();
        break;
      case 'p':
        dot(); dash(); dash();
        break;
      case 'q':
        dash(); dash(); dot(); dash();
        break;
      case 'r':
        dot(); dash(); dot();
        break;
      case 's':
        dot(); dot(); dot();
        break;
      case 't':
        dash();
        break;
      case 'u':
        dot(); dot(); dash();
        break;
      case 'v':
        dot(); dot(); dot(); dash();
        break;
      case 'w':
        dot(); dash(); dash();
        break;
      case 'x':
        dash(); dot(); dot(); dash();
        break;
      case 'y':
        dash(); dot(); dash(); dash();
        break;
      case 'z':
        dash(); dash(); dot(); dot();
        break;
      case '0':
        dash(); dash(); dash(); dash();
        break;
      case '1':
        dot(); dash(); dash(); dash(); dash();
        break;
      case '2':
        dot(); dot(); dash(); dash(); dash();
        break;
      case '3':
        dot(); dot(); dot(); dash(); dash();
        break;
      case '4':
        dot(); dot(); dot(); dot(); dash();
        break;
      case '5':
        dot(); dot(); dot(); dot(); dot();
        break;
      case '6':
        dash(); dot(); dot(); dot(); dot();
        break;
      case '7':
        dash(); dash(); dot(); dot(); dot();
        break;
      case '8':
        dash(); dash(); dash(); dot(); dot();
        break;
      case '9':
        dash(); dash(); dash(); dash(); dot();
        break;
    }
    i++;
  }
}

void dot(){
  // turn the LED on (HIGH is the voltage level)
  digitalWrite(LED_BUILTIN, HIGH);
  // wait for a .45 seconds
  delay(450);
  // turn the LED off by making the voltage LOW
  digitalWrite(LED_BUILTIN, LOW);
  // wait for a second
  delay(300);
}

void dash(){
  // turn the LED on (HIGH is the voltage level)
  digitalWrite(LED_BUILTIN, HIGH);
  // wait for a second
  delay(1000);
  // turn the LED off by making the voltage LOW
  digitalWrite(LED_BUILTIN, LOW);
  // wait for a second
  delay(300);
}

void loop() {

}
