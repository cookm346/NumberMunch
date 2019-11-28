var y = runif(5, 1, 100);

var m = round(mean(y), 2);

var d = round(diff(y, m), 2);

var d2 = round(square(d), 2);

var ssq = round(sum(d2), 2);

document.getElementById("y").innerHTML = str(y);