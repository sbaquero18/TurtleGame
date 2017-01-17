/*This background.js file will hold the main functionality of the program
 *
 *Program description:
 *This program is going to be the background portion of our game
 *it showcases a bunch of orange fish cycling across the screen. 
 */

/*NOTES:
A person responsible for this file should
design the background as well as
initalize the character and obstalce by calling those functions and
call the update functions for the character and the obstacle*/

var yturtle;

function initializeCharacter() {
  yturtle = 430;
}

function updateCharacter() {
  //insert code the make the character move when either the mouse
  //moves or keys are pressed.
  //println(keyCode);
  if (keyCode == UP_ARROW){
    yturtle = yturtle - 2;
  }
  else if (keyCode == DOWN_ARROW){
    yturtle = yturtle + 2;
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
function setup() {
 
  //these portions of code create the variables for each fish so that they operate independantly within my code
  createCanvas(640, 480);
  background(0,0,255);
   x = 500;
   y = 200;
   x1= x-400;
   y1=y+30;
   x2=x-100;
   y2=y+100;
   x3=x+30;
   y3=y+200;
   x4=x-75;
   y4=y-100
   x5=x-250;
   y5=y+200;
   
   initializeCharacter();
   initializeObstacle();
}

function draw() {
  //clear();
  background(0, 0, 255);
  updateBackground();
  updateCharacter();
  updateObstacle();
}


//This code here is what prints the fish onto the page onto their selected locations. 
function updateBackground(){
  fill (255,100,20);
  ellipse( x-200,y-50,10);
  ellipse( x1,y1,10);
  ellipse( x2,y2,10);
  ellipse( x3,y4,10);
  ellipse( x5,y5,10);
 
  //all of the lines of code below here are what set the permissions of each fish and 
  //make it so that they will move across the screen at a given speed until they reach the end of the screen
  //once they reach the end they will reset and start again. 
  if (x<0){
    x=850;
    
  }
    else {
      x=x-7;
  }
   if (x1<0){
    x1=850;
    
  }
    else {
      x1=x1-8;
  }
   if (x2<0){
    x2=850;
    
  }
    else {
      x2=x2-6;
  }
   if (x3<0){
    x3=850;
    
  }
    else {
      x3=x3-5;
  }
   if (x4<0){
    x4=850;
    
  }
    else {
      x4=x4-9;
  }
   if (x5<0){
    x5=850;
    
  }
    else {
      x5=x5-10;
  }
}

//Change or implement as needed


//Change or implement as needed
