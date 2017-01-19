/*This character.js file will hold the functions 
 * that intialize and udpate the character
 *
 *File description:
 *This program creates the character that moves up and down using the up and down arrow keys.
 *
 */

var yturtle;

function initializeCharacter() {
  yturtle = 430;
}

function updateCharacter() {
  //insert code the make the character move when either the mouse
  //moves or keys are pressed.
  //println(keyCode);
  
  if (0 < y || y < 480) {
    
    if (keyCode == UP_ARROW){
    yturtle = yturtle - 4;
    }
    else if (keyCode == DOWN_ARROW){
    yturtle = yturtle + 4;
    }
  }

  //insert the code that draws the character
  noStroke();
  fill(55, 132, 78);
  ellipse(140, yturtle, 80, 30);
  
  
  fill(72, 175, 103);
  triangle(150, yturtle+7, 160, yturtle+9, 130, yturtle+20);
  triangle(110, yturtle+5, 120, yturtle+7, 90, yturtle+10);
  
  
  triangle(90, yturtle, 100, yturtle-2, 100, yturtle+2);
  ellipse(180, yturtle, 10, 7);
 
  
}
