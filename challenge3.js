$(document).ready(function() {

	var myArray = [];

	$( "#myPassword" ).keypress(function(e) {
		( event.which == 13 )

		myArray.push(event.which);

		if (myArray.length < 6) {
			console.log("less than 6");
		} else if (myArray.length === 6) {
			console.log("equal to 6");
		} else {
			console.log("more than 6");
		}

	});

	$( "#myPassword" ).keypress(function(e) {

	});



});