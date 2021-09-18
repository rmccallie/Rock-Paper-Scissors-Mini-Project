var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var compare = function(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
    return "The result is a tie!";
    }
    if(userChoice === "rock") {
        if(computerChoice === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
    if(userChoice === "paper") {
        if(computerChoice === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }
    }
    if(userChoice === "scissors") {
        if(computerChoice === "paper") {
        return "scissors wins";
        } else {
            return "rock wins";
        }
    }
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
compare(userChoice, computerChoice);
    if(userChoice) {
        console.log("You win!");
    } else if(computerChoice) {
        console.log("You LOSE!!");
    } else {
        console.log("It's a tie!");
    }