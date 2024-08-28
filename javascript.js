function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100) + 1;
    if (choice <= 33){
        let choice = ('rock');
        return choice;
    } else if (choice <= 66) {
        let choice = ('paper');
         return choice;
    } else if (choice <= 99){
        let choice = ('scissors');
         return choice;
    } else {
        return getComputerChoice();
    }
}

function getPlayerChoice() {
    let choice = prompt('Chose Rock, Paper, or Scissors.');
    if (choice.toLowerCase() == 'rock') {
        return choice;
    } else if (choice.toLowerCase() == 'paper') {
        return choice;
    } else if (choice.toLowerCase() == 'scissors') {
        return choice;
    } else if (choice == '' || null) {
        alert('Make a choice!')
        return getPlayerChoice();
    } else {
       return getPlayerChoice();
    }
}

let playerScore = 0;
let computerScore = 0;

function playGame() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let reset = playRound(playerChoice.toLowerCase(), computerChoice.toLowerCase());
    if (playerScore == 3) {
        console.log(reset)
        return `Game over. You win! Score:${playerScore}-${computerScore}`;
    } else if (computerScore == 3){
        console.log(reset)
        return `Game over. You lose! Score:${playerScore}-${computerScore}`;
    } else {
        console.log(reset)
        return playGame();
    }

function playRound(playerChoice, computerChoice) {
        if (playerChoice === 'rock' && computerChoice === 'scissors' 
            || playerChoice === 'paper' && computerChoice === 'rock' 
            || playerChoice === 'scissors' && computerChoice === 'paper') {
            playerScore++
            return `You Win! The computer chose ${computerChoice}.`
        } else if (playerChoice === undefined || computerChoice === undefined) {
            return `No contest.`;
        } else if (playerChoice === computerChoice) {
            return `Draw! The compuer chose ${computerChoice}.`;
        } else {
            computerScore++
            return `You lose! The computer chose ${computerChoice}.`;
        }
    }
}