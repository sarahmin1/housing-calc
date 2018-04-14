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

<<<<<<< HEAD
		//variables
=======
//variables
>>>>>>> 2ab9a41119664da87142ab0fbb21c1094b887c95
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
			//if one is greater than years use months to determine outcome//
<<<<<<< HEAD
			if (years < 1) {
				$(".years").find(".time_length").text(months);
				$(".years").find(".time_unit").text("months");
			} else {
				$(".years").find(".time_length").text(years);
				$(".years").find(".time_unit").text("years");
			}

			if (years < 0) {
				alert("Sorry, no home");
			} else if (years < 1) {
				$(".years").find(".time_length").text(months);
				$(".years").find(".time_unit").text("months");
			} else {
				$(".years").find(".time_length").text(years);
				$(".years").find(".time_unit").text("years");
			}

			//this makes "years and months" show up after it calculates everything//
=======
			if(years < 1){
				$(".years").find(".time_length").text(months);
				$(".years").find(".time_unit").text("months");
			} else{
				$(".years").find(".time_length").text(years);
				$(".years").find(".time_unit").text("years");
			}
//this makes "years and months" show up after it calculates everything//
>>>>>>> 2ab9a41119664da87142ab0fbb21c1094b887c95
			$(".years").addClass("active");
		});
	});
});
