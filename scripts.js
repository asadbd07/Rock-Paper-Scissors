function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"]
    const final = choice[Math.floor(Math.random() * choice.length)];
    return final.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    var results = "";
    if (playerSelection === computerSelection){
        results = "TIE !";
    } else if(playerSelection === "rock" && computerSelection !== 'paper'){
        results = "You Win! " + playerSelection + " beats " + computerSelection;
    } else if(playerSelection === "paper" && computerSelection !== 'scissors'){
        results = "You Win! " + playerSelection + " beats " + computerSelection;
    } else if(playerSelection === "scissors" && computerSelection !== 'rock'){
        results = "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        results = "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    return results;
}

const playerSelection = prompt("Please enter your choice (rock, paper, scissors)").toLowerCase();

const computerSelection = getComputerChoice();
console.log("Player: " + playerSelection + " Computer: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
