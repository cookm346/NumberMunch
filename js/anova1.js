var n = 4;
var y1 = runif(n, 1, 75);
var y2 = runif(n, 50, 100);
var y = y1.concat(y2);

//SST
var gm = round(mean(y), 2);
var d = round(diff(y, gm), 2);
var d2 = round(square(d), 2);
var sst = round(sum(d2), 2);


//SSB
var y1m = round(mean(y1), 2);
var y2m = round(mean(y2), 2);

var y1_m = round(y1m - gm, 2);
var y2_m = round(y2m - gm, 2);

var y1_m2 = round(y1_m*y1_m, 2);
var y2_m2 = round(y2_m*y2_m, 2);

var ssbn = round(Number(y1_m2) + Number(y2_m2), 2);

var ssb = round(ssbn * n, 2);


//SSW
var y1w = round(diff(y1, y1m), 2);
var y2w = round(diff(y2, y2m), 2);

var y1w2 = round(square(y1w), 2);
var y2w2 = round(square(y2w), 2);

var ssw = round(sum(y1w2.concat(y2w2)), 2);


//DF
var a = 2;
var dft = (a * n) - 1;
var dfb = a - 1;
var dfw = a * (n - 1);


//MS
var msb = round(ssb / dfb, 2);
var msw = round(ssw / dfw, 2);

//F
var f = round(msb / msw, 2);

document.getElementById("y1").innerHTML = str(y1);
document.getElementById("y2").innerHTML = str(y2);





