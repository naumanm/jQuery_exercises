// mikeNauman

$(document).ready(function() {

	$("form").on("click", function(e) {
		//console.log($("input[type=text]").val());

		$("body").append
			('<div class="row">' + 
				'<input type="checkbox"></checkbox>' + 
				$('input[type=text]').val() +
				//'<input type="checkbox" checked="checked"></checkbox>' + 
				'<button>remove</button>' + 
			'</div>');
	});

	$("body").on("click", "button", function(e) {
		$(this).parent().remove();
		// $(this).remove();
		console.log("this is a test1");
	});

	$("body").on("click", "input[type='checkbox']", function(e) {
		$(this).parent().toggleClass("completed");
		console.log("this is a test2");
	});


});