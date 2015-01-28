$(document).ready(function() {

	var myArray = [];

	$( "#myPassword" ).keypress(function(e) {
		( event.which == 13 )

		console.log( event.which	 );
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

});