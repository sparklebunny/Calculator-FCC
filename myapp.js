$(document).ready(function(){
// set variable for button keys & operators
var keys = document.body.querySelectorAll("section#calculator-buttons button");
var operators = ["+", "-", "x", "&divide;"];
// used to store values of numbers (buttons) clicked
var inputNum = [];


// get value of button when clicked
$("button").click(function() {
	//get value of button clicked and store in variable
	var clickedBtn = $(this).val();
	//display button value in calculator window
	$("#answer").html(clickedBtn); 
	// if C is clicked, clear screen
	if (clickedBtn === "c") {
		$("#answer").html(" ");
	}
	console.log(clickedBtn);
});



// use operators to do math procedure 
//return answer after = is clicked
// clear calculator window when "c" is clicked


}); // FIN