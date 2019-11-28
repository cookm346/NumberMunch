var x = Math.random()*(100)+1;					//random number between 1-100
var place = runif(1, 1, 5); 
var xround = round(x, place); 				
	
document.getElementById("x").innerHTML = x;
document.getElementById("place").innerHTML = place;