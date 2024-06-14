const OPTIONS = {
	1: 'Rock',
	2: 'Paper',
	3: 'Scissors',
};

function getHumanChoice() {
	const choice = prompt('Please select your choice\n1. Rock\n2. Paper\n3. Scissors');
	return parseInt(choice, 10);
}

function getComputerChoice() {
	const minCeiled = Math.ceil(1);
	const maxFloored = Math.floor(4);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice === 1 && computerChoice === 3) {
		return 'human';
	} else if (humanChoice === 2 && computerChoice === 1) {
		return 'human';
	} else if (humanChoice === 3 && computerChoice === 2) {
		return 'human';
	} else if (humanChoice === computerChoice) {
		return 'draw';
	} else {
		return 'computer';
	}
}

function displayRound(humanChoice, computerChoice, winner) {
	console.log(`You selected ${OPTIONS[humanChoice]}`);
	console.log(`Computer selected ${OPTIONS[computerChoice]}`);
	console.log(`Winner: ${winner}`);
	console.log('================================================');
}

function playGame(rounds) {
	let i = 0;
	let humanScore = 0;
	let computerScore = 0;

	while (i < rounds) {
		const humanChoice = getHumanChoice();
		const computerChoice = getComputerChoice();
		const winner = playRound(humanChoice, computerChoice);
		switch (winner) {
			case 'human':
				humanScore++;
				break;
			case 'computer':
				computerScore++;
				break;
		}
		displayRound(humanChoice, computerChoice, winner);
		i += 1;
	}

	if (humanScore > computerScore) {
		console.log(`The Human wins the game with score: ${humanScore}`);
	} else if (humanScore === computerScore) {
		console.log(
			`The game was a draw. Game scores are:\n Human: ${humanScore}\n Computer: ${computerScore}`
		);
	} else {
		console.log(`The computer wins the game with score: ${computerScore}`);
	}
}

playGame(5);
