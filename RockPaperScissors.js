
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";

    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors")
        return "Rock beats Scissors! You Win!";
    else if (playerSelection == "paper" && computerSelection == "rock")
        return "Paper beats Rock! You Win!";
    else if (playerSelection == "scissors" && computerSelection == "paper")
        return "Scissor beats Paper! You Win!";
    else if (playerSelection == "rock" && computerSelection == "paper")
        return "Paper beats Rock! You Lose!";
    else if (playerSelection == "paper" && computerSelection == "scissors")
        return "Scissor beats Paper! You Lose!";
    else if (playerSelection == "scissor" && computerSelection == "rock")
        return "Rock beats Scissor! You Lose!";
    else
        return "It's a Draw";
}

function playGame() {
    let i;
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice\nrock\npaper\nscissors");
        playerSelection=playerSelection.toLowerCase();
        console.log(playerSelection);
        if(playerSelection!="rock"&&playerSelection!="paper"&&playerSelection!="scissors")
        {
            console.log("invalid input");
            continue;
        }
        let computerSelection = getComputerChoice();
        console.log("your choice: " + playerSelection);
        console.log("computer choice: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();

