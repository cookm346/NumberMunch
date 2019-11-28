var n = runif(1, 4, 8);

var x = runif(n, 1, 100);

var xbar = round(mean(x), 2);

var sd = runif(1, 5, 25);

var z = 1.96;

var sqn = round(sqrt(n), 2);

var se = round(sd / sqn, 2);

var zse = round(z * se, 2);

var low = round(Number(xbar) - Number(zse), 2);

var up = round(Number(xbar) + Number(zse), 2);

document.getElementById("xo").innerHTML = str(x);
document.getElementById("zo").innerHTML = z;
document.getElementById("no").innerHTML = n;
document.getElementById("sdo").innerHTML = sd;




