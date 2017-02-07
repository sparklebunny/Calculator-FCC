// $(document).ready(function(){

// set variables for keys and operators
var keys = document.querySelectorAll("#calculator-body button");
var operators = ["+", "-", "x", "&divide;"];
var decimalAdded = false;

// add onclick event to keys and operators
for (var i = 0; i < keys.length; i++){
// keypress events
	keys[i].onclick = function(e){
		// get input and button values
		var input = document.querySelector("#calculator-screen");
		var inputValue = input.innerHTML;
		var btnValue = this.innerHTML;
		console.log(inputValue);
		// if clear "C" key is pressed, clear screen
		if (btnValue == "C") {
			input.innerHTML = " ";
			decimalAdded = false;
		}
		//otherwise append btnValues 
		else if (btnValue = "=") {
			var equation = inputValue;
			var lastChar = equation[equation.length - 1];
			console.log(equation);
		}
		//replace X and &divide; with * and / using regex
		equation = equation.replace(/x/g, '*').replace(/&divide/g, '/');
		//check last character of equation, if operator or decimal, remove
		if (operators.indexOf(lastChar) > -1 || lastChar === ".") {
			equation = equation.replace(/.$/, '');
		};

		if (equation) {
			input.innerHTML = eval(equation);
		}

		decimalAdded = false;
	};


};















//}); // FIN