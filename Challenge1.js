// mikeNauman

$(document).ready(function() {

	$(".myInput").on("submit", function(e) {
		$("tr:even > td").css("background-color", $("input[type=text]").val());
	});	

});

