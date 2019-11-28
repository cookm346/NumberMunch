var x = runif(1, 1, 100);
document.getElementById("x").innerHTML = x;

var m = runif(1, 51, 91);
document.getElementById("m").innerHTML = m;

var s = runif(1, 5, 30);
document.getElementById("s").innerHTML = s;

var z = round(((x - m) / s), 2);