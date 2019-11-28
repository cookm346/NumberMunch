var n = runif(1, 4, 25);

var xbar1 = runif(1, 4, 25);
var xbar2 = runif(1, 4, 25);
var d = round(xbar1 - xbar2, 2);

var s1 = runif(1, 4, 10);
var s2 = runif(1, 4, 10);

var num1 = round((n - 1) * s1, 2);
var num2 = round((n - 1) * s2, 2);

var num = Number(num1) + Number(num2);

var denom = (Number(n) * 2) - 2;

var s2p = round(num / denom, 2);

var s2pn = round(s2p * round(1/n, 2) * 2, 2);

var sqs2pn = round(sqrt(s2pn), 2);

var t = round(d / sqs2pn, 2);

document.getElementById("x1o").innerHTML = xbar1;
document.getElementById("x2o").innerHTML = xbar2;
document.getElementById("n1o").innerHTML = n;
document.getElementById("n2o").innerHTML = n;
document.getElementById("s1o").innerHTML = s1;
document.getElementById("s2o").innerHTML = s2;





