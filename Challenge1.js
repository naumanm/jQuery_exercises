// mikeNauman

$(document).ready(function() {

	$("form").on("submit", function(e) {
		$(".even").css("background-color", $("input[type=text]").val());
	});	

});

