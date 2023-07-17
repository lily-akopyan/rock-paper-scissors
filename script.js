const btns = document.querySelectorAll('.choicebtn');
console.log(btns);
btns.forEach(btn => {
    btn.addEventListener('click', getUserChoice);
})

function getComputerChoice() {
    const output = ["rock", "paper", "scissors"];
    let ran = Math.floor(Math.random() * 3);
    return output[ran];
}

let computerScore = 0;
let userScore = 0;
let outcome;

function getUserChoice(e) {
    let userChoice = (e.target.id);
    console.log(userChoice);
    playRound(getComputerChoice(), userChoice)
}


function playRound(computerSelection, userSelection) {
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

/*function game() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getUserChoice());
        console.log(outcome)
        switch (outcome) {
            case "You win! Paper beats Rock!":
            case "You win! Scissors beat Paper!":
            case "You win! Rock beats Scissors!":
                ++userScore;
                console.log("Score (you:computer): " + userScore + ":" + computerScore);
                break;
            case "You lose! Rock beats Scissors!":
            case "You lose! Paper beats Rock!":
            case "You lose! Scissors beat Paper!":
                ++computerScore;
                console.log("Score (you:computer): " + userScore + ":" + computerScore);
                break;
            case "Draw":
                console.log("Score (you:computer): " + userScore + ":" + computerScore);
                break;
        }
    }
    console.log("Game Over!");

    if (userScore > computerScore) {
        console.log("You won!");
    } else if (userScore < computerScore) {
        console.log("You lost!");
    } else {
        console.log("It's a draw!");
    }
}
*/