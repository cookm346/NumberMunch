var n = 5;
var y = runif(n, 1, 100);

var m = round(mean(y), 2);

var d = round(diff(y, m), 2);

var d2 = round(square(d), 2);

var ssq = round(sum(d2), 2);

var vrnc = round(ssq / (n - 1), 2);

var stdev = round(sqrt(vrnc), 2);

document.getElementById("y").innerHTML = str(y);
