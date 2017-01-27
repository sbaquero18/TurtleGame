/*
 *                                  _________
 *                           _.--""'-----,   `"--.._
 *                        .-''   _/_      ; .'"----,`-,
 *                      .'      :___:     ; :      ;;`.`.
 *                     .      _.- _.-    .' :      ::  `..
 *                  __;..----------------' :: ___  ::   ;;
 *             .--"". '           ___.....`:=(___)-' :--'`.
 *           .'   .'         .--''__       :       ==:    ;
 *       .--/    /        .'.''     ``-,   :         :   '`-.
 *    ."', :    /       .'-`\\       .--.\ :         :  ,   _\
 *   ;   ; |   ;       /:'  ;;      /__  \\:         :  :  /_\\
 *   |\_/  |   |      / \__//      /"--\\ \:         :  : ;|`\|    
 *   : "  /\__/\____//   """      /     \\ :         :  : :|'||
 * ["""""""""--------........._  /      || ;      __.:--' :|//|
 *  "------....______         ].'|      // |--"""'__...-'`\ \//
 *    `| JUNOKIM |__;_...--'": :  \    //  |---"""      \__\_/
 *      """""""""'            \ \  \_.//  /
 *        `---'                \ \_     _'
 *                              `--`---'  
 * This obstacle.js file will hold the functions 
 * that intialize and update the obstacle
 * 1/23/2017 Junho Kim
 * File description:
 * This is the code that defines the two jellyfish that fly across the screen 
 * 
 */
//These are the four variables that define where the two jellyfish are at a given time
var jx, jy, jx2, jy2;
var jellyfish;
function Preload() {
 jellyfish = loadImage("jellyfish.png");
} 
//setting the starting x and y values for each jellyfish
function initializeObstacle() {
  jx = 750;
  jx2 = 680;
  jy = 240;
  jy2 = 240;
}
//this function gets called in draw function, setting position of jellyfish and draw the jellyfish
function updateObstacle() { 
  
  //make the obstacle move automatically
  //and reset to random positions so the game isn't boring.
  if(jx <= 0) { //when jellyfish is out of screen
    jx = 680; //move jellyfish back to the right
    jy = Math.floor((Math.random() * 480) + 1); //set random y position
  } else { //if not
    jx = jx - 8; //just make it move to the left
  }
  if(jx2 <= 0) { //this is same as the if statement above
    jx2 = 680;
    jy2 = Math.floor((Math.random() * 480) + 1);
  } else {
    jx2 = jx2 - 10;
  }
  //the code that draws the obstacle
  image(jellyfish, jx, jy);
  image(jellyfish, jx2, jy2);
  /*
  fill(178, 102, 255); //set color of the main body of jellyfish
  ellipse(jx, jy, 24, 24); //make main body of jellyfish
  ellipse(jx2, jy2, 24, 24); //make another main body of jellyfish
  stroke(178, 102, 255); //set color of the jelly-legs of the jellyfish
  strokeWeight(4); //make jelly-legs thicker
  line(jx - 12, jy, jx - 12, jy + 30); //these all draw jelly-legs
  line(jx + 12, jy, jx + 12, jy + 30);
  line(jx - 6, jy + 6, jx - 6, jy + 24);
  line(jx + 6, jy + 6, jx + 6, jy + 24);
  line(jx, jy + 12, jx, jy + 30);
  line(jx2 - 12, jy2, jx2 - 12, jy2 + 30);
  line(jx2 + 12, jy2, jx2 + 12, jy2 + 30);
  line(jx2 - 6, jy2 + 6, jx2 - 6, jy2 + 24);
  line(jx2 + 6, jy2 + 6, jx2 + 6, jy2 + 24);
  line(jx2, jy2 + 12, jx2, jy2 + 30); //yeah a lot of jelly-legs
  */
}
