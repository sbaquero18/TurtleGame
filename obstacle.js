/*This obstacle.js file will hold the functions 
 * that intialize and udpate the obstacle
 *
 *File description:
 *ADD HERE
 *
 */

var jx, jy, jx2, jy2;

function initializeObstacle() {
  jx = 750;
  jx2 = 680;
  jy = 240;
  jy2 = 240;
}

function updateObstacle() {
  
  //insert code the make the obstacle move automatically
  //and reset to random positions so the game isn't boring.
  if(jx <= 0) {
    jx = 680;
    jy = Math.floor((Math.random() * 480) + 1);
  } else {
    jx = jx - 8;
  }
  if(jx2 <= 0) {
    jx2 = 680;
    jy2 = Math.floor((Math.random() * 480) + 1);
  } else {
    jx2 = jx2 - 10;
  }
  //insert the code that draws the obstacle
  fill(178, 102, 255);
  ellipse(jx, jy, 24, 24);
  ellipse(jx2, jy2, 24, 24);
  stroke(178, 102, 255);
  strokeWeight(4);
  line(jx - 12, jy, jx - 12, jy + 30);
  line(jx + 12, jy, jx + 12, jy + 30);
  line(jx - 6, jy + 6, jx - 6, jy + 24);
  line(jx + 6, jy + 6, jx + 6, jy + 24);
  line(jx, jy + 12, jx, jy + 30);
  line(jx2 - 12, jy2, jx2 - 12, jy2 + 30);
  line(jx2 + 12, jy2, jx2 + 12, jy2 + 30);
  line(jx2 - 6, jy2 + 6, jx2 - 6, jy2 + 24);
  line(jx2 + 6, jy2 + 6, jx2 + 6, jy2 + 24);
  line(jx2, jy2 + 12, jx2, jy2 + 30);
}

/** TESTING CODE **/
/* This code should be commented when the team has put all
the files in one project. But you will need this code to test
the character functions. Add the code to test your functions in here.
*/
