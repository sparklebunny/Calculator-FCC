//get value of buttons when clicked 
//make sure numbers are interpreted as an integer not string
//chain numbers together until operator is clicked 
//only one decimal point per number input
//display value of button clicked in display window
//attach value of operators to each
//chain numbers/input with operation
//equal button to get result
//make sure numbers/answer fits into display window
//round decimals to fit in display window
//clear button clears last number input
//clear all button clears entire display window/input values
// use mathjs.org library


$(document).ready(function(){

	var number = "";
    var newnumber = "";
    var operator = "";
    // var equals = $("#equalBtn").eval();
    var totaldiv = $("#answer");
    totaldiv.text("0");

// make sure numbers & answer fit in screen
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
	};
		
	var input = "";
	var answer = "";

	// get value of button when clicked
	$("button").click(function() {
		
		var number = $(this).val();
		// if C is clicked, clear screen
		
		if (number === "AC") {
			input = "";
		} else if (number === "D") {
			// update input to previous input (input - 1)
			input = input.slice(0, -1); 

		} else if (number != "=") {
			input = input + $(this).val();
		} else (number === "=") {
			var parser = math.parser();
			answer = parser.eval(input);
		}
		
		//display button value in calculator window
		if (input === "") {
			$("#answer").html("0");
		} else if (number != "=") {
			$("#answer").html(input); 
		} else {
			$("#answer").html(answer);
		}

		console.log(input);
	});



	// switch statement for operators
	// set two variables - one for current number entered, one for second number entered??

	// use something like this: eval("2 * 5 + 10");

	// use operators to do math procedure 
	//return answer after = is clicked


}); // FIN