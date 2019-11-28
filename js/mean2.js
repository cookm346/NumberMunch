var x = runif(runif(1, 4, 8), 5, 25); 					//x: 4-8 numbers between 5 and 25
var strx = str(x);	                  					//convert to character
var mx = round(mean(x), 2);           					//round x to 2 decimal places
var lx = x.length;                    					//length of x
	
	
document.getElementById("strx").innerHTML = strx;
document.getElementById("lx").innerHTML = lx;