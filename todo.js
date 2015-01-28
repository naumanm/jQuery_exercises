// mikeNauman

$(document).ready(function() {

	$("form").on("click", function(e) {
		console.log($("input[type=text]").val());
	$("body").append('<div>' + '<input type="checkbox"></checkbox>'+ " " + $('input[type=text]').val() + '<input type="checkbox" checked="checked"></checkbox>' + '</div>');
	//$("input[type=checkbox]").attr("checked","checked");

	console.log($("input").last());


	});	

});