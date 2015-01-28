$(document).ready(function() {

	var myArray = [];

	$( "#myPassword" ).keypress(function(e) {

		myArray.push(event.which);

		console.log(myArray);

		if (myArray.length < 6) {
			console.log("less than 6");
		} else if (myArray.length === 6) {
			console.log("equal to 6");
		} else {
			console.log("more than 6");
		}

	});

	$( ".myForm" ).keypress(function(e) {
		if (myArray.length < 1) {
			alert("please enter your password");
			console.log(myArray);
		}
	});



});