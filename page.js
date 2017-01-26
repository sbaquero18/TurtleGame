/* Dylan Levene 
1.25.17
This program disables the use of arrow keys for scrolling on the HTML page so it does not interfere with the game. 
I used this program from http://stackoverflow.com/questions/8916620/disable-arrow-key-scrolling-in-users-browser?scrlybrkr and I changed to something I understand more.*/

window.addEventListener("keydown", function(e) {
  if (keyCode == 32) {
    e.preventDefault();
  }
    
  if (keyCode == 38) {
    e.preventDefault();
  }
  
  if (keyCode == 40) {
    e.preventDefault();
  }
  
    
}, false);
