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
    if (playerScore == 3) {
        updateScore();
        alert(`Game over. You win! Score:${playerScore}-${computerScore}`);
        playerScore = 0;
        computerScore = 0;
        return ;
    } else if (computerScore == 3){
        updateScore();
        alert(`Game over. You lose! Score:${playerScore}-${computerScore}`)
        playerScore = 0;
        computerScore = 0;
        return
    } else {
        return;
    }
}

function playRound(playerChoice = getPlayerChoice(), computerChoice = getComputerChoice()) {
        if (playerChoice === 'rock' && computerChoice === 'scissors' 
            || playerChoice === 'paper' && computerChoice === 'rock' 
            || playerChoice === 'scissors' && computerChoice === 'paper') {
            playerScore++
            return `You Win! The computer chose ${computerChoice}.`
        } else if (playerChoice === undefined || computerChoice === undefined) {
            return `No contest.`;
        } else if (playerChoice === computerChoice) {
            return alert(`Draw! The compuer chose ${computerChoice}.`);
        } else {
            computerScore++
            return `You lose! The computer chose ${computerChoice}.`;
        }
    }

    const scoreboard = document.querySelector('.scoreboard');

    function updateScore() {
      scoreboard.innerText = `Player- ${playerScore} VS ${computerScore} -Computer`
    }

document.querySelector('.buttonsContainer').addEventListener('click', function(event) {
    if (event.target.tagName === 'SPAN') {
        const button = event.target.closest('.btn');
        if (button) {
          const action = button.dataset.action;

          if (action) {
            const playerChoice = action;
            const results = playRound(playerChoice, getComputerChoice());
            console.log(results);
            updateScore();
            playGame();
          } else {
        }

        }
    }
})

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
