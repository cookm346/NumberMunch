var ss = runif(1, 0, 2500);
var n = runif(1, 5, 10);
var sd = round(sqrt(ss / (n - 1)), 2);
	
document.getElementById("ss").innerHTML = ss;
document.getElementById("n").innerHTML = n;