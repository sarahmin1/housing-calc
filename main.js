$(document).ready(function () {




	// $("input").on("keyup keydown keypress change", function (e) {
	// 	var income = parseFloat($(".income").val());
	// "var savings = income - (rent + expenses + loans);"

	$("input").on("keyup keydown keypress change", function (e) {
		var income = parseFloat($(".income").val());
		var years = parseFloat($(".years").val());
		var savings = parseFloat($(".savings").val());
		var rent = parseFloat($(".rent").val());
		var loans = parseFloat($(".loans").val());
		var expenses = parseFloat($(".expenses").val());


		var brooklyn = 226000,
			bronx = 78875,
			queens = 187000,
			manhattan = 500000;

		$("select").on("change", function () {
			var borough = parseFloat($(this).val());
			var savings = income - (rent + expenses + loans);
			var years = borough / (savings * 12);
			var months = (years * 12);

			// How long it will take the user to buy a house in months and years//
			if(years < 1){
				$(".years").find(".time_length").text(months);
				$(".years").find(".time_unit").text("months");
			} else{
				$(".years").find(".time_length").text(years);
				$(".years").find(".time_unit").text("years");
			}

			$(".years").addClass("active");
		});
	});
});
