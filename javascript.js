function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100) + 1;

    if (choice <= 33){
        return ('rock')
    }

    else if (choice <= 66) {
         return ('paper')
        }

    else if (choice <= 99){
         return ('scissors') 
        }

         

    else {getComputerChoice()
    }

}