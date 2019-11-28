//CHECKANSWER: colors the background of textbox based on input
	function checkanswer(correctAnswer) {
		var answer;
		var output;
		
		//input box on html file must have id = answer
		answer = document.getElementById("answer").value;
	
		//if answer is correct
			if (answer - correctAnswer == 0){
			output = correct() + "&nbsp;" + "Keep practicing!" + 
			'<p><a href="javascript:history.go(0);">New question</a></p>';
	
		//if answer textbox is empty
			} else if (answer.length == 0) {
				output = "<p>Oh come on! You didn't even try!</p>";
	
		//if answer is not a number
			} else if (isNaN(answer)) {
				output = "<p>Hmm. It might be better if you try a number.</p>";
	
		//if answer is wrong
			} else {
				output = "<p>Not quite!</p>" + 
				"<p>Keep trying!</p>" +
				'<a href="javascript:history.go(0);">New question</a>';
			}
	
		//emtpy p tag must have id = answer_output
		document.getElementById("answer_output").innerHTML = output;
	
	}




//CHECKINPUT: colors the background of textbox based on input
	function checkInput(correctAnswer, id) {
		var input = document.getElementById(id);
		
		if (input.value - correctAnswer == 0) {
			input.style.backgroundColor = "#86e51b";   //correct = green
		} else if (input.value.length == 0){
			input.style.backgroundColor = "#ffffff";   //blank = white
		} else { 
			input.style.backgroundColor = "#cacfd2";   //incorrect = grey
		}
	}
	

//CLEARFIELDS: clear inputs on button click	
	function ClearFields() {
		
		var allInputs = document.getElementsByTagName("input");
		
		for(var i = 0; i < allInputs.length; i++) {
			allInputs[i].value = "";
			allInputs[i].style.backgroundColor = "#ffffff";
		}
		javascript:history.go(0);
	}




//RUNIF: Generate n integers from random uniform distribution
	function runif(n, min, max) {
		var x = [];
		for(var i = 0; i < n; i++) {
			x[i] = Math.floor(Math.random()*(max-min+1)+min);
		}
		return x;
	}
	
	
//ROUND: Round x to n decimal places
	function round(x, n) {
		if(x.length == undefined){
			return x.toFixed(n);
		} else {
			var rx = [];	
			for(var i = 0; i < x.length; i++){
			rx[i] = x[i].toFixed(n);
			}
			return rx;
		}
	}
	
	
//DIFF: difference between each element of a vector and some number
	function diff(x, y) {
		var df = [];
		for(var i = 0; i < x.length; i++){
			df[i] = x[i] - y;
		}
		return df;
	}
	
	
//SUM: sum vector
	function sum(x) {
		var sx = 0;
		for(var i = 0; i < x.length; i++) {
			sx += Number(x[i]);
		}
		return sx;
	}	
	
	
//SQUARE: square all elements in vector
	function square(x) {
		var s = [];
		for(var i = 0; i < x.length; i++){
			s[i] = x[i] * x[i];
		}
		return s;
	}
	
	
//SQRT: square root
	function sqrt(x) {
		return Math.sqrt(x);
	}
	

//MEAN: Compute arithmetic mean of vector
	function mean(x) {
		return sum(x) / x.length;
	}
	
	
//SS: Compute sum of squared differences of a vector
	function ss(x) {
		return sum(square(center(x)));
	}

	
//VARI: Compute variance of vector
	function vari(x) {
		return ss(x) / (x.length - 1);
	}
	
	
//SD: Compute standard deviation of a vector
	function sd(x) {
		return sqrt(vari(x));
	}
	
	
//CENTER: Zero center a vector
	function center(x) {
		var c = [];
		var m = mean(x);
		
		for(var i = 0; i < x.length; i++){
			c[i] = x[i] - m;
		}
		return c;
	}
	
	
//SCALE: Scale vector to have sd of 1
	function scale(x) {
		var s = [];
		var sdx = sd(x);
		
		for(var i = 0; i < x.length; i++){
			s[i] = x[i] / sdx;
		}
		return s;
	}
	
	
//NORM: Normalize vector (z score)
	function norm(x) {
		return scale(center(x));
	}
	
	
//SE: Standard error of the mean for a vector
	function se(x) {
		return sd(x) / sqrt(x.length);
	}
	
	
//CROSSPROD: Cross product of two vectors
	function crossprod(x, y) {
		var s = 0;
		for(var i = 0; i < x.length; i++){
			s += x[i] * y[i];
		}
		return s;
	}
	
	
//COR: Sample correlation of two vectors
	function cor(x, y) {
		var cx = center(x);
		var cy = center(y);
		return crossprod(cx, cy) / (sqrt(sum(square(cx))) * sqrt(sum(square(cy))));
	}
	
	
//T: Student's two sample t-test
	function t(x, y) {
		return (mean(x) - mean(y)) / ((sqrt((((x.length - 1) * vari(x)) + ((y.length - 1) * vari(y))) / (x.length + y.length - 2))) * sqrt((1 / x.length) + (1 / y.length)));
	}
	
	
//WELCH: Welch's two sample t-test
	function welch(x, y) {
		return (mean(x) - mean(y)) / sqrt((vari(x) / x.length) + (vari(y) / y.length));
	}
	
	
//CORRECT: Randomly select one correct congratulations messages
	function correct() {
		var m = ["Great job!", "That's it!", "Excellent work!", "You got it!", 
				 "Right on!", "Fantastic!", "Perfect!", "Woo hoo!", "You did it!"];
		return m[runif(1, 0, (m.length - 1))];
	}
	
	
//STR: Convert numeric vector to comma separated string
	function str(x) {
		return x.join(', ');
	}
	
	
	
//SORT: Sort vector
	function sort(x) {
		var swap = 1;
		var t;
		while(swap == 1){
			swap = 0;
			for(var i = 0; i < (x.length - 1); i++){
				if(x[i] > x[i + 1]){
					t = x[i];
					x[i] = x[i + 1];
					x[i + 1] = t;
					swap = 1;
				}
			}
		}
		return x;
	}
	
	
//MEDIAN: Compute median of vector
	function median(x) {
		var m;
		var i;
		x = sort(x);
		
		if(x.length % 2 != 0){
			i = ((x.length + 1) / 2) - 1;
			m = x[i];
		} else {
			i = (x.length / 2) - 1;
			m = (x[i] + x[i + 1]) / 2;
		}
		return m;
	}
	
	
var x = [-1,-4,3,6,9,88,90,1234567,58,9,67];
	
document.getElementById("demo").innerHTML = median(x);
















