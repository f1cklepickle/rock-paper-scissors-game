function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100) + 1;

    if (choice <= 33){
        return ('rock')
    } else if (choice <= 66) {
         return ('paper')
    } else if (choice <= 99){
         return ('scissors') 
    } else {
        getComputerChoice()
    }
}

function getPlayerChoice() {
    let answer = prompt('Chose Rock, Paper, or Scissors.')

    if (answer.toLowerCase() == 'rock') {
        return answer;
    } else if (answer.toLowerCase() == 'paper') {
        return answer;
    } else if (answer.toLowerCase() == 'scissors') {
        return answer;
    } else if (answer == '' || null) {
        alert('Make a choice!') 
        getPlayerChoice()
    } else {
       alert('Not a valid answer.') 
       return;
    }
}