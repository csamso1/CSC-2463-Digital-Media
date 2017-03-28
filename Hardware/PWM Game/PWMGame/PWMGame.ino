//Goal: To hold the button down until the LED reaches its brightest point, whoever can stop the LED at its brightest wins the game.
//Rules: Only one person can play the game at a time, players take turns pressing the button.
//Challenge: To hold the button long enough to make the LED bright, but not to long as it will reset to the dimmest possible setting.
//Interaction: Player presses a button, the LED light gets brighter
//Clayton Samson
//YouTube video link:https://youtu.be/MGMNBJpPCC4

const int LED = 9; // the pin for the LED
const int BUTTON = 7; // input pin of the button
int val = 0; // stores the state of the input pin
int old_val = 0; // stores the previous value of "val"
int state = 0; // 0 = LED off while 1 = LED on
int brightness = 1; // Stores the brightness value
unsigned long startTime = 0; // when did we begin pressing?

void setup() {
  pinMode(LED, OUTPUT); // tell Arduino LED is an output
  pinMode(BUTTON, INPUT); // and BUTTON is an input
}

void loop() {
  val = digitalRead(BUTTON); // read input value and store it
  
  // check if there was a transition
  if ((val == HIGH) && (old_val == LOW)) 
  {
    state = 1 - state; // change the state from off to on, or vice-versa
    startTime = millis(); // millis() is the Arduino clock it returns how many milliseconds have passed since the board has been reset. (this line remembers when the button was last pressed)
    delay(10);
  }
  
  // check whether the button is being held down
  if ((val == HIGH) && (old_val == HIGH)) {
    // If the button is held for more than 500ms.
    if (state == 1 && (millis() - startTime) > 500) 
    {
      brightness++; // increment brightness by 1
      delay(2); // delay to avoid brightness going up too fast
      if (brightness > 255) // 255 is the max brightness
      { 
        brightness = 0; // if we go over 255 let’s go back to 0
      }
    }
  }
  
  old_val = val; // val is now old, let’s store it
  if (state == 1) 
  {
    analogWrite(LED, brightness); // turn LED ON at the current brightness level
  } 
  else 
  {
    analogWrite(LED, 0); // turn LED OFF
  }
}
