$(document).ready(function () {
	"use strict";


// push random numbers into array
	var random;
	var randomArray = [];

	
// ============== Starts with initial light ====================
	var lightTheButton = function (button, lightSpeed) {	
		$(button).animate({
			opacity: 1
		}, lightSpeed).animate({
			opacity: .25
		}, lightSpeed);
	};
	var roundCounter = 0;
	var switchStatementForButton = function (randomArray) {
		setTimeout(function() {
			switch (randomArray[roundCounter]) {
				case 1:
					lightTheButton("#green", 500);
					break;
				case 2:
					lightTheButton("#red", 500);
					break;
				case 3:
					lightTheButton("#yellow", 500);
					break;
				case 4:
					lightTheButton("#blue", 500);
					break;
			};	
			roundCounter++;
			if (roundCounter < randomArray.length) {
				switchStatementForButton(randomArray);
			} else {
				userInput();
			};
		}, 1000);
	};

	var userInput = function() {
		$(".coloredButton").on("click", function(){
			var buttonData = parseInt($(this).attr("data-number"));
			var buttonInput = "#" + $(this).attr("id");
			lightTheButton(buttonInput, 100);
			$(".coloredButton").off("click");
			compareInputAndArray(buttonData);
		});
	};


	var addToSequence = function (event) {
		random = Math.floor(Math.random() * 4) + 1;
		console.log("this is random" + random);
		randomArray.push(random);
		console.log(randomArray);

		switchStatementForButton(randomArray);
	};
	$("#start").on("click", function(){
		addToSequence();
		$('#start').off('click');
	});

	var count = 0;
	var compareInputAndArray = function(userInputData){
		if (userInputData === randomArray[count]) {
			count++;
			if (count < randomArray.length) {
				userInput();
			} else {
				roundCounter = 0;
				count = 0;
				addToSequence();

			};
		} else {
			setTimeout(function(){
				location.reload();
			}, 5000);
			document.getElementById("yeahBoi").play();
			$("body").css("background-image", "url(/img/joeyAsFlavaFLav.jpg)");
	        // $("body").css("background-size", "cover");
	        // $("body").css("background-repeat", "no-repeat");
	        // alert("yeeeeaaaaahhhh, boooiiiiii!!!");
		};
	};


});