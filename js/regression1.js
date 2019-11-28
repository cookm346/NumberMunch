var n = 5;
var x = runif(n, 1, 100);
var y = runif(n, 1, 100);

var mx = round(mean(x), 2);
var my = round(mean(y), 2);

var vx = round(vari(x), 2);
var vy = round(vari(y), 2);

var dx = round(diff(x, mx), 2);
var dy = round(diff(y, my), 2);

var xy = [];

for(var i = 0; i < x.length; i++){
	xy[i] = round(dx[i] * dy[i], 2);
}

var xys = round(sum(xy), 2);

var cov = round(xys / (n - 1), 2);

var b1 = round(cov / vx, 2);


var b0 = round(my - (b1 * mx), 2);


document.getElementById("xo").innerHTML = str(x);
document.getElementById("yo").innerHTML = str(y);
document.getElementById("mxo").innerHTML = mx;
document.getElementById("myo").innerHTML = my;
document.getElementById("vxo").innerHTML = vx;
document.getElementById("vyo").innerHTML = vy;