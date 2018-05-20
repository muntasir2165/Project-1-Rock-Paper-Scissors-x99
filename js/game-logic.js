// All code should be written in this file.

//player 1 global variables
let playerOneMoveOneType = undefined; 
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeType = undefined;
let playerOneMoveThreeValue = undefined;

//player 2 global variables
let playerTwoMoveOneType = undefined;
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeType = undefined;
let playerTwoMoveThreeValue = undefined;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
	if (player == null || moveOneType == null || moveOneValue == null || moveTwoType == null || moveTwoValue == null || moveThreeType == null || moveThreeValue == null) {
		return null;
	} else if ( (moveOneType !== 'rock' && moveOneType !== 'paper' && moveOneType !== 'scissors') || 
		(moveTwoType !== 'rock' && moveTwoType !== 'paper' && moveTwoType !== 'scissors') || 
		(moveThreeType !== 'rock' && moveThreeType !== 'paper' && moveThreeType !== 'scissors')) {
		return null;
	} else if ((moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1) || 
		(moveOneValue > 99 || moveTwoValue > 99 || moveThreeValue > 99) || 
		(moveOneValue + moveTwoValue + moveThreeValue > 99)) {
		return null;
	} else {
		switch (player) {
			case 'Player One':
				playerOneMoveOneType = moveOneType; 
				playerOneMoveOneValue = moveOneValue;
				playerOneMoveTwoType = moveTwoType;
				playerOneMoveTwoValue = moveTwoValue;
				playerOneMoveThreeType = moveThreeType;
				playerOneMoveThreeValue = moveThreeValue;
				break;
			case 'Player Two':
				playerTwoMoveOneType = moveOneType; 
				playerTwoMoveOneValue = moveOneValue;
				playerTwoMoveTwoType = moveTwoType;
				playerTwoMoveTwoValue = moveTwoValue;
				playerTwoMoveThreeType = moveThreeType;
				playerTwoMoveThreeValue = moveThreeValue;
			break;
		}
	}
}

function getRoundWinner(roundNumber) {
	if (roundNumber == null || roundNumber < 1 || roundNumber > 3) {
		return null;
	}

	switch (roundNumber) {
		case 1:
			return playerMoveCompare(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
			break;
		case 2:
			return playerMoveCompare(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
			break;
		case 3:
			return playerMoveCompare(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
			break;
	}
}

function getGameWinner() {
	if (playerOneMoveOneType == null || playerOneMoveOneValue == null || playerOneMoveTwoType == null || playerOneMoveTwoValue == null || playerOneMoveThreeType == null || playerOneMoveThreeValue == null || 
		playerTwoMoveOneType == null || playerTwoMoveOneValue == null || playerTwoMoveTwoType == null || playerTwoMoveTwoValue == null || playerTwoMoveThreeType == null || playerTwoMoveThreeValue == null) {
		return null;
	}

	let playerOneWins = 0;
	let playerTwoWins = 0;
	for (let round = 1; round <= 3; round++) {
		if (getRoundWinner(round) === 'Player One') {
			playerOneWins++;
		} else if (getRoundWinner(round) === 'Player Two') {
			playerTwoWins++;
		}
	}

	if (playerOneWins > playerTwoWins) {
		return 'Player One';
	} else if (playerTwoWins > playerOneWins) {
		return 'Player Two';
	} else {
		return 'Tie';
	}
}

function setComputerMoves() {
	const moveTypes = ['rock', 'paper', 'scissors']
	//set player 2 moves
	playerTwoMoveOneType = moveTypes[Math.floor(Math.random() * moveTypes.length)];
	playerTwoMoveTwoType = moveTypes[Math.floor(Math.random() * moveTypes.length)];
	playerTwoMoveThreeType = moveTypes[Math.floor(Math.random() * moveTypes.length)];

	//set player 2 move strength values
	//the strength for each move must be at least 1
	//the move values should be random but add up to 99
	const minimumValue = 1;
	playerTwoMoveOneValue = minimumValue;
	playerTwoMoveTwoValue = minimumValue;
	playerTwoMoveThreeValue = minimumValue;
	while (playerTwoMoveOneValue + playerTwoMoveTwoValue + playerTwoMoveThreeValue !== 99) {
		playerTwoMoveOneValue = Math.floor(Math.random() * (96 - minimumValue + 1)) + minimumValue;
		playerTwoMoveTwoValue = Math.floor(Math.random() * (96 - minimumValue + 1)) + minimumValue;
		playerTwoMoveThreeValue = Math.floor(Math.random() * (96 - minimumValue + 1)) + minimumValue;
	}
}

function playerMoveCompare(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {
	if (playerOneMoveType == null || playerOneMoveValue == null || playerTwoMoveType == null || playerTwoMoveValue == null) {
		return null;
	}

	if (playerOneMoveType === playerTwoMoveType) {
		if (playerOneMoveValue === playerTwoMoveValue) {
			return 'Tie';
		} else if (playerOneMoveValue > playerTwoMoveValue) {
			return 'Player One';
		} else {
			return 'Player Two';
		}
	} else if (playerOneMoveType === 'rock') {
		if (playerTwoMoveType === 'paper') {
			return 'Player Two';
		} else {
			return 'Player One';
		}
	} else if (playerOneMoveType === 'paper') {
		if (playerTwoMoveType === 'scissors') {
			return 'Player Two';
		} else {
			return 'Player One';
		}
	}  else if (playerOneMoveType === 'scissors') {
		if (playerTwoMoveType === 'rock') {
			return 'Player Two';
		} else {
			return 'Player One';
		}
	}
}
