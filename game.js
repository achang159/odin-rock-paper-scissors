let humanScore = 0;
let computerScore = 0;

function playGame() {
    console.log("Let's play Rock, Paper, Scissors!");
    
    let round = 1;
    while(round <= 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const roundResult = playRound(humanChoice, computerChoice);
        console.log("Round %d: %s Human Choice: %s; CPU Choice: %s", round, roundResult, humanChoice, computerChoice);
        round++;
    }

    alert(getGameResult(humanScore, computerScore));
    humanScore = 0;
    computerScore = 0;
}

function getHumanChoice() {
    let humanChoice = "";
    humanChoice = prompt("Pick an option: ").toLowerCase();
    // TODO: Add error checking for human choice
    return humanChoice;
}

function getComputerChoice() {
    let computerChoice = "";
    const rand = Math.random();
    
    if(rand >= 0  && rand < 1/3) computerChoice = "rock";
    else if(rand >= 1/3 && rand < 2/3) computerChoice = "paper";
    else if(rand >= 2/3 && rand < 1) computerChoice = "scissors";
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        return"Draw!";
    }
    else if(humanChoice == "rock"     && computerChoice == "scissors" ||
            humanChoice == "paper"    && computerChoice == "rock"     ||
            humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return "Human Wins!";
    }
    else {
        computerScore++;
        return "Computer Wins!";
    }
}

function getGameResult(humanScore, computerScore) {
    if(humanScore == computerScore) return "Draw!";
    else if(humanScore > computerScore) return "Human Wins!";
    else return "Computer Wins!";
}

playGame();
