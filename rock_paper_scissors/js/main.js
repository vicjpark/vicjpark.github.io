// Create a variable humanScore. Give it a value of the number 0.
// Create a variable computerScore. Give it a value of the number 0.
//
// Create a function play. It should accept two parameters: humanPlay and computerPlay.
// Write all the code below INSIDE the function curly braces!!
//
//   Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
//   For example: "You played rock. The bot played scissors."
//
//   If the human play is equal to the computer play
//     Log "You tied. :|" to the console.
//   Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
//   humanPlay is 'rock' and the computerPlay is 'scissors' OR
//   humanPlay is 'scissors' and the computerPlay is 'paper'
//     Log "You win! :)" to the console
//     Add one to the humanScore variable (be sure to use += )
//   Otherwise log "You lose! :(" to the console
//     Add one to the computerScore variable (be sure to use += )
//
//   Log "You have {humanScore} points" to the console
//   For example: "You have 0 points"
//   Log "The bot has {computerScore} points" to the console.
//   For example: "The bot has 3 points"
//
// END OF FUNCTION (Place the closing curly brace here!)
//
// After defining the function, call the function 5 - 6 times,
// Providing a different play for the computer and human each time.
// Hint: You'll need to use two arguments
// each time you call the play function.
//
//
// BONUS:
// Create a "best of 3" version
//
// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.

var humanScore = 0;
var computerScore = 0;

function play(humanPlay, computerPlay) {
  console.log("You played " + humanPlay + ". The bot played " + computerPlay + ".");

  if (humanPlay === computerPlay) {
    console.log("You tied. :|");
  } else if (humanPlay === "paper" && computerPlay === "rock" || humanPlay === "rock" && computerPlay === "scissors" || humanPlay === "scissors" && computerPlay === "paper"){
    console.log("You win! :)");
    humanScore += 1;
  } else {
    console.log("You lose! :(");
    computerScore += 1;
  }
  console.log("You have " + humanScore + " points");
  console.log("The bot has " + computerScore + " points.");

  if (humanScore === 3) {
    console.log("You're the ULTIMATE WINNER! GAME OVER.");
  } else if (computerScore === 3) {
    console.log("You're the ULTIMATE LOSER! GAME OVER.");
  }
}

play("rock", "scissors");
play("scissors", "rock");
play("paper", "scissors");
play("paper", "rock");
play("scissors", "scissors");
play("rock", "rock");
play("scissors", "paper");
