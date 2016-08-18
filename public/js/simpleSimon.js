$(document).ready(function () {
"use strict";

// ====================== Randomize ========================================

	// var random = Math.floor(Math.random() * 4) + 1; 
 // 	console.log(random);

// // ======================================================================



// push random numbers into array
	var random;
	var randomArray = [];
	// randomArray.push(random);

	$("#test").click(function(){
		random = Math.floor(Math.random() * 4) + 1;
		randomArray.push(random);
		console.log(randomArray);

		switch (random) {
			case 1:
				$("#green").fadeTo("slow", 1, function(){
					$("#green").fadeTo(function(){
						$("#green").css("opacity", ".5");
					});
				});
				break;
			case 2:
				$("#red").fadeTo("slow", 1, function(){
					$("#red").fadeTo(function(){
						$("#red").css("opacity", ".5");
					});
				});
				break;
			case 3:
				$("#yellow").fadeTo("slow", 1, function(){
					$("#yellow").fadeTo(function(){
						$("#yellow").css("opacity", ".5");
					});
				});
				break;
			case 4:
				$("#blue").fadeTo("slow", 1, function(){
					$("#blue").fadeTo(function(){
						$("#blue").css("opacity", ".5");
					});
				});
				break;
		};
	});



// ================== Random Button Lights Up ==========================================
// switch statement. cases are numbers associated with colors, which will light up. 

	// switch (random) {
	// 	case 1:
	// 		$("#green").fadeTo("slow", 1, function(){
	// 			$("#green").fadeTo(function(){
	// 				$("#green").css("opacity", ".5");
	// 			});
	// 		});
	// 		break;
	// 	case 2:
	// 		$("#red").fadeTo("slow", 1, function(){
	// 			$("#red").fadeTo(function(){
	// 				$("#red").css("opacity", ".5");
	// 			});
	// 		});
	// 		break;
	// 	case 3:
	// 		$("#yellow").fadeTo("slow", 1, function(){
	// 			$("#yellow").fadeTo(function(){
	// 				$("#yellow").css("opacity", ".5");
	// 			});
	// 		});
	// 		break;
	// 	case 4:
	// 		$("#blue").fadeTo("slow", 1, function(){
	// 			$("#blue").fadeTo(function(){
	// 				$("#blue").css("opacity", ".5");
	// 			});
	// 		});
	// 		break;
	// }


// ========================= flashes button =======================
	
	// $("#green").fadeTo("slow", 1, function(){
	// 	$("#green").fadeTo(function(){
	// 		$("#green").css("opacity", ".5");
	// 	});
	// });



});