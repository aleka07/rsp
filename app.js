let userScore = 0;
let computerScore = 0;
let gameHistory = [];
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const gameHistory_div = document.getElementById("game-history");

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function updateHistory(result) {
    gameHistory.unshift(result); // Add new result to the beginning
    if (gameHistory.length > 10) { // Keep only last 10 games
        gameHistory.pop();
    }
    
    gameHistory_div.innerHTML = gameHistory
        .map(item => `<div class="history-item">${item}</div>`)
        .join('');
}

function win(userChoice,computerChoice) {
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const resultText = `${userChoice} beats ${computerChoice}. You Win!`;
	result_p.innerHTML = resultText;
	updateHistory(resultText);
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
	const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const resultText = `${computerChoice} beats ${userChoice}. You Lose!`;
	result_p.innerHTML = resultText;
	updateHistory(resultText);
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
	const userChoice_div = document.getElementById(userChoice);
	const resultText = `${userChoice} equals ${computerChoice}. It's a Draw!`;
	result_p.innerHTML = resultText;
	updateHistory(resultText);
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win(userChoice, computerChoice);
			break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
			lose(userChoice, computerChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', () => game("rock"));

	paper_div.addEventListener('click', () => game("paper"));

	scissors_div.addEventListener('click', () => game("scissors"));

}

main();
