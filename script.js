function getComputerChoice() {
    const output = ["rock", "paper", "scissors"];
    let ran = Math.floor(Math.random() * 3);
    return output[ran];
}

function getUserChoice() {
    return prompt("Rock, Paper or Scissors? ");;
}

function playRound(computerSelection, userSelection) {
    computerSelection = getComputerChoice();
    userSelection = getUserChoice().trim().toLowerCase();
    let outcome;
    if (computerSelection == userSelection) {
        outcome = "Draw";
    } else if (computerSelection == "rock") {
        if (userSelection == "paper") {
            outcome = "You win! Paper beats Rock!";
        } else {
            outcome = "You lose! Rock beats Scissors!";
        }
    } else if (computerSelection == "paper") {
        if (userSelection == "rock") {
            outcome = "You lose! Paper beats Rock!";
        } else {
            outcome = "You win! Scissors beat Paper!";
        }
    } else {
        if (userSelection == "rock") {
            outcome = "You win! Rock beats Scissors!";
        } else {
            outcome = "You lose! Scissors beat Paper!";
        }
    }
    console.log("Computer chose: " + computerSelection);
    console.log("You chose: " + userSelection);
    return outcome;
}