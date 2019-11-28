var x = runif(5, 1, 100);
document.getElementById("x").innerHTML = str(x);

var m = median(x);
document.getElementById("m").innerHTML = m;