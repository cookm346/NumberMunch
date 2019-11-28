var n = 4;

var x = runif(n, 1, 100);
var y = runif(n, 1, 100);

var xbar = round(mean(x), 2);
var ybar = round(mean(y), 2);

var sx = round(sd(x), 2);
var sy = round(sd(y), 2);

var dx = round(diff(x, xbar), 2);
var dy = round(diff(y, ybar), 2);

var zx = [];
for(var i = 0; i < dx.length; i++){
	zx[i] = round(dx[i] / sx, 2);
}

var zy = [];
for(var i = 0; i < dy.length; i++){
	zy[i] = round(dy[i] / sy, 2);
}


var zz = [];
for(var i = 0; i < zx.length; i++){
	zz[i] = round(zx[i] * zy[i], 2);
}

var sumzz = round(sum(zz), 2);

var r = round(sumzz / (n - 1), 2);


document.getElementById("xo").innerHTML = str(x);
document.getElementById("yo").innerHTML = str(y);
document.getElementById("xbaro").innerHTML = xbar;
document.getElementById("ybaro").innerHTML = ybar;
document.getElementById("sxo").innerHTML = sx;
document.getElementById("syo").innerHTML = sy;


