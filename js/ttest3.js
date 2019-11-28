var n = runif(1, 4, 8);

var x = runif(n, 1, 100);

var xbar = round(mean(x), 2);

var mu = runif(1, 30, 70);

var sd = runif(1, 5, 25);

var sqn = round(sqrt(n), 2);

var se = round(sd / sqn, 2);

var d = round(xbar - mu, 2);

var t = round(d / se, 2);


document.getElementById("xo").innerHTML = str(x);
document.getElementById("no").innerHTML = n;
document.getElementById("sdo").innerHTML = sd;
document.getElementById("muo").innerHTML = mu;




