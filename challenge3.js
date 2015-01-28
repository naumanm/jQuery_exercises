$(document).ready(function() {

	var myArray = [];

	$( "#myPassword" ).keypress(function(e) {
		( event.which == 13 )
		if (myArray.length < 6) {
			console.log("less than 6");
		} else if (myArray.length === 6) {
			console.log("equal to 6");
		} else {
			console.log("more than 6");
		}
	});


	$("form").on("click", function(e) {

		console.log("test");

	});



});