// mikeNauman

$(document).ready(function() {

	$("form").on("click", function(e) {
		console.log($("input[type=text]").val());

		$("body").append
			('<div class="row">' + 
				'<input type="checkbox"></checkbox>' + 
				$('input[type=text]').val() +
				'<input type="checkbox" checked="checked"></checkbox>' + 
				//'<button>my button</button>' + 
			'</div>');
	});

	// this works too!
	// 	$("body").on("click", "button", function(e) {
	// 		console.log("this is a test1");
	// 	});

	$("body").on("click", "input[type='checkbox']", function(e) {
		$(this).parent().addClass("completed");
		console.log("this is a test2");
	});


});