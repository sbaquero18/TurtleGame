/*This character.js file will hold the functions 
 * that intialize and udpate the character
 *
 *File description:
 *This program creates the turtle that moves up and down using the up and down arrow keys.
 *
 */

//This creates the variable for the y position of the turtle. 
var yturtle;

//This function will initialize the turtle. It sets up the placement of the turtle and initialized the variable yturtle. 
function initializeCharacter() {
  yturtle = 430;
}

//This function allows the character to be moved with the arrow keys, up and down using two if statements. 
function updateCharacter() {
  //println(keyCode);
  //This keeps the turtle on the screen.
  if (yturtle <= 0) { 
    yturtle = 5;
  }
  //This allows the turtle to move up when the keys are pressed. 
  if (keyCode == UP_ARROW){
     yturtle = yturtle - 4;
  }
  //This keeps the turtle on the screen.
  if (yturtle >= 480){
    yturtle = 478;
  }
  
    //This mvoes the turtle down when the down key is pressed.
   else if (keyCode == DOWN_ARROW){
      yturtle = yturtle + 4;
   }

  //The code below draws the parts of the turtle. 
  noStroke();
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
}
