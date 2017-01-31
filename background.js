/*Sebastian Baquero
 *January 23, 2017
 *Program description:
 *This program is going to be the background portion of our game
 *it showcases a variety of orange fish cycling across the screen. 
 The background.js file also functions as the "hub" for our code
 as it initializes and brings all of the other aspects of the 
 progam to the scene. 
 */

/*NOTES:
A person responsible for this file should
design the background as well as
initalize the character and obstalce by calling those functions and
call the update functions for the character and the obstacle*/

//The two score variables here allow for the intialization
//of our scoreboard that is at the top of the screen
var score;
var scoreText;
var highscore = 0;
var gameplay = false; //variable that represent the state of the game

//This is the function that dictates the setup of our
//code and creates everything that we need in our scene
function setup() {
 
  //these portions of code create the variables for each fish so
 //that they operate independantly within my code
 
 //This creates the size and color of the background
 createCanvas(640, 480);
  background(0,0,255);
 
 //The x variable designates where the fish will be in
 //the horizontal direction while the y variable indicates
 //the vertical location as well. 
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
   score = 0;
 //Allows for the character and obstacles to spawn into the game  
 initializeCharacter();
   initializeObstacle();
}
// This is the code that represents the scoreboard. It starts @ 0, 
//and continues to add on until it touches a jellyfish. 
function Updatescore() {
 score++; //first add score
 if(score < 0) { //if score gets lower than 0
  score = 0; //set it back to 0
 } else if(score < 10) { //if score is less than 10
  scoreText = 0; //set the score that gets displayed to zero320
 } else { //if the score is larger than or equal to 10
  scoreText = Math.floor(score/10); //set the score to display 1/10 of its actual score(score is too big so it's displaying this way)
 }
 fill(0, 0, 0); //set the color of the font
 textSize(20); //set the size of the font
 text("Score: " + scoreText, 450, 20); //display the score on the screen
 if(highscore < scoreText) { //this update the high score when current score is higher than highscore
  highscore = scoreText;
 }
 document.getElementById("scoreboard").innerHTML = "High Score: " + highscore; //this change the content of the div in HTML file that display the high score
}
//This draws and redraws our background after each unit of time so that
//we dont have trails of vectors that follow our objects around. 
function draw() {
  //clear();
  if(keyIsPressed) { //if player press any key
   gameplay = true; //game is now playing  
  }
  if(gameplay == true) { //if game is playing
   background(0, 0, 255); //display all the game componenets
   updateBackground();
   updateCharacter();
   updateObstacle();
   collide();
   Updatescore();
  } else { //if not
   fill(0, 0, 0); //set the color of the font
   textSize(40); //set the size of the font
   text("Turtle Game", 220, 300); //display the text on the screen
   textSize(20); //set the size of the font
   text("Press Any Key to Play", 230, 100); //display the text on the screen
  }
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



function collide(){  //this function tracts the turtle and jelly fish, and changes the score based of their collision
	 var rect1 = {x: 100, y: yturtle-30, width: 80, height: 30} //turtle
	 var rect2 = {x: jx-12, y: jy-12 , width: 24, height: 24} //jellyfish one
	 var rect3 = {x: jx2-12, y: jy2-12 , width: 24, height: 24} //jellyfish two
	

	 if (rect1.x < rect2.x + rect2.width && //if turt width (x) overlaps jellyfish
	  rect1.x + rect1.width > rect2.x && //if jellyfish width overlaps turt
	  rect1.y < rect2.y + rect2.height && //if the heights overlaps
	  rect1.height + rect1.y > rect2.y) {
	    //rect(100,100,100,100);
	    score = score - 10; //score decreases
	   }
	 
	 if (rect1.x < rect3.x + rect3.width && //if rect’s are overlapping
	  rect1.x + rect1.width > rect3.x &&
	  rect1.y < rect3.y + rect3.height &&
	  rect1.height + rect1.y > rect3.y) {
	    //rect(100,100,100,100);
	    score = score - 100;
	   }
	}

