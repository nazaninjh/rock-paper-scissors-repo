// create a function that plays as the computer
// the function should randomly pick either rock, paper or scissors
// use function expressions to end up with a cleaner code
// randomize the choices and assign meaningful values to them
let getComputerChoice = function() {
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return "Rock";
    } else if (rand === 1) {
        return "Paper";
    } else {
        return "Scissors";
    };

}
// create variables to store answers
let computerSelection = "";
let playerSelection = "";
// create variables to store scores
let playerScore = 0;
let computerScore = 0;
// create a function that returns the winner
let playRound = function(playerSelection,computerSelection) {
    computerSelection = getComputerChoice()
    console.log(`computer: ${computerSelection}`)
    computerSelection = computerSelection.toLowerCase()
    playerSelection= prompt("Enter your choice here: ").toLowerCase()
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        return "You lose! Paper beats rock 🤭"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        return "You lose! scissors cuts paper 🧐"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        return "You lose! rock beats scissors 😬"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        return "You won! Rock beats scissors 😄"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        return "You won! paper beats rock 😃"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return "You won! Scissors cuts paper 😃"
    } else if (playerSelection == computerSelection) {
        return "Tied, You both chose the same answer!"
        playerScore += 0;
        computerScore += 0;
    } else if (playerSelection != "paper" || "scissors" || "rock") {
        return "Please choose between rock, paper and scissors."
        playerScore += 0;
        computerScore += 0;
    }    
}
// create a function that plays 5 rounds
// score each round's winner and sum it up
let game = function() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection,computerSelection))
    };
    if (playerScore > computerScore) {
        return "You are the winner 🥳!"
    } else if (playerScore < computerScore) {
        return "You Lost 😟!"
    } else {
        return "Tied, no one won!"
    }
}
console.log(game())