$(document).ready(function () {
"use strict";

// ====================== Randomize ========================================

	var random = Math.floor(Math.random() * 4) + 1; 
 	console.log(random);
// // =========================================================================

// switch statement. cases are numbers associated with colors, which will light up. 

	switch (random) {
		case 1:
			$("#green").fadeTo("slow", 1, function(){
				$("#green").fadeTo(function(){
					$("#green").css("opacity", ".5");
				});
			});;
			break;
		case 2:
			$("#red").fadeTo("slow", 1, function(){
				$("#red").fadeTo(function(){
					$("#red").css("opacity", ".5");
				});
			});;
			break;
		case 3:
			$("#yellow").fadeTo("slow", 1, function(){
				$("#yellow").fadeTo(function(){
					$("#yellow").css("opacity", ".5");
				});
			});;
			break;
		case 4:
			$("#blue").fadeTo("slow", 1, function(){
				$("#blue").fadeTo(function(){
					$("#blue").css("opacity", ".5");
				});
			});;
			break;
	}

// ======================== variables representing colored buttons established and pushed into array =========================
	// var green = $("#green");
	// var red = $("#red");
	// var yellow = $("#yellow");
	// var blue = $("#blue");
	// var colorArray = [green, red, yellow, blue];	
	// console.log(colorArray);

// ========================= flashes button =======================
	
	// $("#green").fadeTo("slow", 1, function(){
	// 	$("#green").fadeTo(function(){
	// 		$("#green").css("opacity", ".5");
	// 	});
	// });



});