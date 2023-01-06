let rpsChoices = ['rock', 'paper', 'scissors'];

let playerChoice;

let computerWins = 0;
let playerWins = 0;
let ties = 0;

let playAgain = true;


while (playAgain === true) {

playerChoice = prompt('Please enter your choice of rock, paper, or scissors:');

while (!((playerChoice === "rock") || (playerChoice === "paper") || (playerChoice === "scissors"))) {
        playerChoice = prompt('Invalid input: Enter either rock or paper or scissors only \nPress Cancel to quit the game');
        playerChoice = playerChoice.toLowerCase();
    }

let randomIndex = Math.floor(Math.random() * rpsChoices.length);
let computerChoice = rpsChoices[randomIndex];

alert('You chose ' + playerChoice + '.\nThe computer chose ' + computerChoice + '.');

if (((playerChoice === 'rock') && (computerChoice === 'scissors')) || 
    ((playerChoice === 'paper') && (computerChoice === 'rock')) || 
    ((playerChoice === 'scissors') && (computerChoice === 'paper'))) {
    playerWins++;
    alert('You win!');
   }
else if (computerChoice ===  playerChoice) {
    ties++;
    alert('It is a tie!');      
    }
else {
    computerWins++;
    alert('You lose!');
   }

if (confirm('You won ' + playerWins + ' times \nThe computer won ' + computerWins 
    + ' times \nThere were ' + ties + ' ties \nPress OK to play again, or Cancel to quit the game!')) {
    playAgain = true;
    } 
else {
    playAgain = false;
    }
}


