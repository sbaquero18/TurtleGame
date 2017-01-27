/*Dylan Levene
January 23rd, 2017
 This program creates the turtle that moves up and down using the up and down arrow keys. It uses the function updateCharacter, which creates the code for the character. Using the function initializeCharacter the character can be placed in the screen. This piece of code is used in setup function on the background.js file. 
 
 */

//This creates the variable for the y position of the turtle.
var yturtle;
var turtleimage;
function Preload() {
 turtleimage = loadImage("turtle.png");
} 
//This function will initialize the turtle and place it on the screen. It sets up the placement of the turtle at y = 430. This function is placed in the set up function of the background.js file. 
function initializeCharacter() {
  yturtle = 430;
}

//This function first draws the character. It also allows the character to be moved with the arrow keys, up and down using two if statements. 
function updateCharacter() {
  //This keeps the turtle on the screen.
 if (yturtle <= 0) { 
   yturtle = 5;
 }
  
 //The keyIsPressed variable is used to only have the turtle moving up and down when the keys and being pressed. 
    //This allows the turtle to move up when the keys are pressed.
 if (keyCode == UP_ARROW){
      yturtle = yturtle - 4;
  }
  
    //This keeps the turtle on the screen.
  if (yturtle >= 480){
      yturtle = 478;
  }
  
    //This moves the turtle down when the down key is pressed.
   if (keyCode == DOWN_ARROW){
     yturtle = yturtle + 4;
   }

  //The code below draws the parts of the turtle. 
  noStroke();
  image(turtle, 140, yturtle);
 /*
  //body
  fill(55, 132, 78);
  ellipse(140, yturtle, 80, 30);
  
  //legs
  fill(72, 175, 103);
  triangle(150, yturtle+7, 160, yturtle+9, 130, yturtle+20);
  triangle(110, yturtle+5, 120, yturtle+7, 90, yturtle+10);
  
  //head
  triangle(90, yturtle, 100, yturtle-2, 100, yturtle+2);
  ellipse(180, yturtle, 10, 7);
 */
}
