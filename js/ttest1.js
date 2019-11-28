var xbar = runif(1, 40, 95);
document.getElementById("xbar").innerHTML = xbar;

var mu = runif(1, 40, 95);
document.getElementById("mu").innerHTML = mu;

var se = runif(1, 5, 30);
document.getElementById("se").innerHTML = se;


var t = round(((xbar - mu) / se), 2);