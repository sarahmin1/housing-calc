$(document).ready(function () {




			// $("input").on("keyup keydown keypress change", function (e) {
			// 	var income = parseFloat($(".income").val());
			// "var savings = income - (rent + expenses + loans);"

			$("input").on("keyup keydown keypress change", function (e) {
				var income = parseFloat($(".income").val());
				var years = parseFloat($(".years").val());
				var savings = parseFloat($(".savings").val());

				var brooklyn = 226000,
					var bronx = 78875,
						var queens = 187000,
							var manhattan = 500000;

				$("select").on("change", function () {
					var borough = parseFloat($(this).val());
					var savings = income - (rent + expenses + loans);
					var years = (borough / savings) * 12;
					// How many years it will take the user to buy a house
					$(".years").find("span").text(years);

				});

			});