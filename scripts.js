function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"]
    const final = choice[Math.floor(Math.random() * choice.length)];
    return final.toLowerCase();
}
    let computerScore = 0;
    let playerScore = 0;

function playRound(playerSelection, computerSelection){
    var results = "";
    
    if (playerSelection === computerSelection){
        results = "TIE !";
    } else if(playerSelection === "rock" && computerSelection !== 'paper'){
        results = "You Win! " + playerSelection + " beats " + computerSelection;
        playerScore++;
    } else if(playerSelection === "paper" && computerSelection !== 'scissors'){
        results = "You Win! " + playerSelection + " beats " + computerSelection;
        playerScore++;
    } else if(playerSelection === "scissors" && computerSelection !== 'rock'){
        results = "You Win! " + playerSelection + " beats " + computerSelection;
        playerScore++;
    } else {
        results = "You Lose! " + computerSelection + " beats " + playerSelection;
        computerScore++;
    }
    return results;
}

function playGame(round){
    for (let i = 0; i < round; i++){
        const playerSelection = prompt("Please enter your choice (rock, paper, scissors)").toLowerCase();

        const computerSelection = getComputerChoice();
        console.log("Player: " + playerSelection + " Computer: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player: " + playerScore + " Computer: " + computerScore);
    }
    if (playerScore === computerScore ){
        return "TIE !!!";
    } else if (playerScore < computerScore ) {
        return "Computer Win !!!";
    } else if (playerScore > computerScore ) {
        return "Player Win !!!";
    }
}

console.log(playGame(5));