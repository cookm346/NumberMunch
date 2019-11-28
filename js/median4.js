var n = runif(1, 4, 8);
var x = runif(n, 1, 100);
document.getElementById("x").innerHTML = str(x);

var m = median(x);
document.getElementById("m").innerHTML = m;