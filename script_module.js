// JavaScript Document

var myGame = (function () {
	// private variables
	'use strict';
	var die1 = document.getElementById("die1");
	var die2 = document.getElementById("die2");
	var die3 = document.getElementById("die3");
	var die4 = document.getElementById("die4");

	var status = document.getElementById("computerscore");
	var status2 = document.getElementById("playersscore");

	var d1 = Math.floor(Math.random() * 6) + 1; //plus one allows us to round down
	var d2 = Math.floor(Math.random() * 6) + 1;
	var d3 = Math.floor(Math.random() * 6) + 1; //plus one allows us to round down
	var d4 = Math.floor(Math.random() * 6) + 1;
	
	
		var diceTotal = d1 + d2;
	
	
	
		var diceTotalplayer = d3 + d4;
		


	
	// functions
	var compare, display;

	// private functions
	
		compare = function () {
		var result = document.getElementById("results");
		die1.innerHTML = d1;
		die2.innerHTML = d2;
		die3.innerHTML = d3;
		die4.innerHTML = d4;

		if (diceTotal === diceTotalplayer) {
			result.innerHTML = "Game is a DRAW!!!";

		} else if (diceTotal < diceTotalplayer) {

			result.innerHTML = "You win";

		} else if (diceTotal > diceTotalplayer) {

			result.innerHTML = "You lose";
		}
	};


	display = function () {
	

		status.innerHTML = "You Rolled " + diceTotal + ".";
		if (d1 === d2) {
			status.innerHTML += " doubles how cool!";
		}



		status2.innerHTML = "You Rolled " + diceTotalplayer + ".";
		if (d3 === d4) {
			status2.innerHTML += " doubles how cool!";
		}
	};




	return {
		// public function
		play: function () {
			
			compare();
			display();
			
		}
	};

	// gameModule end //
})();

var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', myGame.play);
}


