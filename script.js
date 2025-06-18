function randomChoice(arrayWithChoices) {
    return arrayWithChoices[Math.floor(Math.random() * arrayWithChoices.length)];
}

function getComputerChoice() {
    return randomChoice(['rock', 'paper', 'scissors']);
}

function getHumanChoice() {
    return prompt('(rock/paper/scissors): ');
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase().localeCompare('rock') == 0 && 
        computerChoice.toLowerCase().localeCompare('scissors') == 0) {
        return 1;
    } else if (humanChoice.toLowerCase().localeCompare('paper') == 0 && 
               computerChoice.toLowerCase().localeCompare('rock') == 0) {
        return 1;
    } else if (humanChoice.toLowerCase().localeCompare('scissors') == 0 && 
               computerChoice.toLowerCase().localeCompare('paper') == 0) {
        return 1;
    } else if (humanChoice.toLowerCase().localeCompare(computerChoice.toLowerCase()) != 0) {
        return -1;
    }

    return 0;
}

function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;

    for(let round = 0; round < rounds; round++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        if(playRound(humanChoice, computerChoice) == 1) {
            humanScore += 1;
            console.log(`You win! ${humanChoice} beats ${computerChoice}. you(${humanScore}):computer(${computerScore})`);
        } else if(playRound(humanChoice, computerChoice) == -1) {
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}. you(${humanScore}):computer(${computerScore})`);
        }
    }
} 

playGame(5);