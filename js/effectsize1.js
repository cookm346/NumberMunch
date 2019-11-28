var m1 = runif(1, 40, 95);
document.getElementById("m1").innerHTML = m1;

var m2 = runif(1, 40, 95);
document.getElementById("m2").innerHTML = m2;

var s = runif(1, 5, 30);
document.getElementById("s").innerHTML = s;

var ef = round(((m1 - m2) / s), 2);