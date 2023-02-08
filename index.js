// ones a button is clicked, calculate the score
// ones a player reaches 5 points, announce the winner
let results = document.getElementById("results");
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
    playerSelection = "rock";
    console.log(playRound(playerSelection,computerSelection))
    console.log(game());  
}  );
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
    playerSelection = "paper";
    console.log(playRound(playerSelection,computerSelection));
    console.log(game());   
});
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () =>{
    playerSelection = "scissors";
    console.log(playRound(playerSelection,computerSelection));
    console.log(game());  
});

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

let computerSelection = "";
let playerSelection = "";

let playerScore = 0;
let computerScore = 0;


 let playRound = function(playerSelection,computerSelection) {
     computerSelection = getComputerChoice()
     console.log(`computer: ${computerSelection}`)
     computerSelection = computerSelection.toLowerCase()
     if (playerSelection === "rock" && computerSelection === "paper") {
         computerScore += 1;
         results.innerHTML = ` Your score: ${playerScore} ` + 
         `<br> Opponent's score: ${computerScore} </br>` +
          "You lose! Paper beats rock 🤭" 
     } else if (playerSelection === "paper" && computerSelection === "scissors") {
         computerScore += 1;
         results.innerHTML = ` Your score: ${playerScore} ` + 
         `<br> Opponent's score: ${computerScore} </br>` + " You lose! scissors cuts paper 🧐" 
         
     } else if (playerSelection === "scissors" && computerSelection === "rock") {
         computerScore += 1;
         results.innerHTML = `Your score: ${playerScore}` + 
         `<br> Opponent's score: ${computerScore} </br>` + " You lose! rock beats scissors 😬" 
         
         results.innerHTML + `Your score: ${playerScore}` + 
         `<br> Opponent's score: ${computerScore} </br>` +  `Your Score: ${playerScore} </br>`;
         results.innerHTML + `Your score: ${playerScore}` + 
         `<br> Opponent's score: ${computerScore} </br>` +  `Opponent's Score: ${computerScore} </br>`;
         
     } else if (playerSelection === "rock" && computerSelection === "scissors") {
         playerScore += 1;
         results.innerHTML = `Your score: ${playerScore}` + 
         `<br> Opponent's score: ${computerScore} </br>` + " You won! Rock beats scissors 😄" 
         
     } else if (playerSelection === "paper" && computerSelection === "rock") {
         playerScore += 1;
         results.innerHTML = `Your score: ${playerScore}` + 
         `<br> Opponent's score: ${computerScore} </br>` + " You won! paper beats rock 😃" 
         
     } else if (playerSelection === "scissors" && computerSelection === "paper") {
         playerScore += 1;
         results.innerHTML = `Your score: ${playerScore}` + 
         `<br> Opponent's score: ${computerScore} </br>` + " You won! Scissors cuts paper 😃" 
          
     } else if (playerSelection == computerSelection) {
         
         results.innerHTML = `Your score: ${playerScore}` + 
         `<br> Opponent's score: ${computerScore} </br>` + " Tied, You both chose the same answer!" 
         playerScore += 0;
         computerScore += 0;
     } else if (playerSelection != "paper" || "scissors" || "rock") {
         
         results.innerHTML = `Your score: ${playerScore}` + 
         `<br> Opponent's score: ${computerScore} </br>` + " Please choose between rock, paper and scissors." 
         playerScore += 0;
         computerScore += 0;
     }  
     console.log(playerScore);
     console.log(computerScore);  
 }

 let game = function() {
    
    if(computerScore >= 5 || playerScore >=5) {
        if (playerScore > computerScore) {
            results.textContent = "You are the winner 🥳!"
        } else if (playerScore < computerScore) {
            results.textContent = "You Lost the game 😟!"
        } else {
            results.textContent = "Tied, no one won the game!"
            }
    }
    if(computerScore >= 5 || playerScore >=5) {
        playerScore = 0;
        computerScore = 0;
    }
 };