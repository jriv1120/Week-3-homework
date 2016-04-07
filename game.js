
	var letters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var words= ['superman','batman','wonderwoman','thor','flash','hulk','aquaman','robin','cyborg','ironman'];
	var lives= 8;
	var currentWord= words[Math.floor(Math.random() * words.length)];

	var lettersIn= currentWord.split("");
	var numberUnderscores= lettersIn.length;
	var fillInWin= []; 
	var lettersGuessed= [];
	var wrongGuessed= [];
	var result= currentWord;
	var wins= 0
	var losses= 0


	for (var i = 0; i < numberUnderscores; i++){
		fillInWin.push("_ ");
	}

	function reset(event){
		lives= 8;
		lettersGuessed= [];
		currentWord= words[Math.floor(Math.random() * words.length)];

			for (var i=0; i<lettersIn.length; i++){
				fillInWin.push("_ ");
			}
		}

	function fillInBlank(userGuess){
		for (var i = 0; i < lettersIn.length; i++) {
				if (lettersGuessed == lettersIn[i]) {
					fillInWin[i] = lettersGuessed;			
				}
			}
	}

	document.onkeyup = function(event){

	// var wins= 0
	// var losses= 0
	// var result= currentWord;


	//function reset

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var lettersGuessed= [];

			if (lettersGuessed.indexOf(userGuess) == -1) {
				if (currentWord.indexOf(userGuess) == -1) {
					lives = lives -1;
	 				lettersGuessed.push(userGuess);
	 				wrongGuessed.push(userGuess);

	 		if (lives == 0) {

	 			losses++;
	 			reset();
	 		};

	 	} else {
	
			lettersGuessed.push(userGuess);
	 		currentWord = currentWord.replace(userGuess, '');

	 		// BIG CHANGE - Loop through solution array then match index in blanksolution array.
	 		for (var i=0; i < numberUnderscores; i++){

	 			if(result[i] == userGuess) {
	 				fillInWin[i] = userGuess;	
	 			}
	 		}

	 		if (currentWord.length == 0) {

	 			reset();
	 			wins++;
	 		};

	 	};
	 }

	 	var winNow = "Wins: " + wins;
		var guessedNow = "Letters Already Guessed: " + wrongGuessed;
		var guessesLeft = "# of Guesses Remaining: " + lives;
		var lostNow = "Games Lost: " + losses;
		var wordNow = result;

		document.getElementById("wins").innerHTML = winNow;
		document.getElementById("guessedNow").innerHTML = guessedNow;
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
		document.getElementById("answerArea").innerHTML = fillInWin;
		document.getElementById("lostNow").innerHTML = lostNow;

	
}




















