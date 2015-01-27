// mikeNauman

$(document).ready(function() {
	$("input").on("click", function(e) {
		console.log($("input[type=text]").val());

	$(".even").css("background-color", $("input[type=text]").val());

		//$("tr").attr("class", ".even").css("background-color", $("input[type=text]").val());

	});	

});

