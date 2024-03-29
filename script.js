//Event listeners for the user choice buttons 
//and set the user choice based on click
const btns = document.querySelectorAll('.choicebtn');
btns.forEach(btn => {
    btn.addEventListener('click', getUserChoice);
})

//Function removes event listener 
//and disables cursor interaction for choice buttons
function btnsRemove() {
    btns.forEach(btn => {
        btn.removeEventListener('click', getUserChoice);
        btn.classList.add('disabled');
    })
}
//Event listener for help button
const help = document.getElementById('help');
help.addEventListener('click', () => {
    document.getElementById('helppopup').classList.add('show');
})

//Event listener for close button
const close = document.getElementById('close');
close.addEventListener('click', () => {
    document.getElementById('helppopup').classList.remove('show');
})

//Refresh page on click (play again button)
const reset = document.getElementById('resetbtn');
reset.addEventListener('click', () => location.reload());

//Read id of clicked button and set userChoice to that id
function getUserChoice(e) {
    let userChoice = (e.target.id);
    playRound(getComputerChoice(), userChoice)
}

//Randomise computer choice
function getComputerChoice() {
    const output = ["rock", "paper", "scissors"];
    let ran = Math.floor(Math.random() * 3);
    return output[ran];
}

//Initialize variables
let computerScore = 0;
let userScore = 0;


//Play one round and display results
function playRound(computerSelection, userSelection) {
    let outcome;

    if (computerSelection == userSelection) {
        outcome = "Draw";
    } else if (computerSelection == "rock") {
        if (userSelection == "paper") {
            outcome = "You win! Paper beats Rock!";
            ++userScore;
        } else {
            outcome = "You lose! Rock beats Scissors!";
            ++computerScore;
        }
    } else if (computerSelection == "paper") {
        if (userSelection == "rock") {
            outcome = "You lose! Paper beats Rock!";
            ++computerScore;
        } else {
            outcome = "You win! Scissors beat Paper!";
            ++userScore;
        }
    } else {
        if (userSelection == "rock") {
            outcome = "You win! Rock beats Scissors!";
            ++userScore;
        } else {
            outcome = "You lose! Scissors beat Paper!";
            ++computerScore;
        }
    }
    document.getElementById('you').textContent = capitalise(userSelection);
    document.getElementById('comp').textContent = capitalise(computerSelection);
    document.getElementById('round').textContent = outcome;
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('comp-score').textContent = computerScore;
    gameOver();
}

//Determine the winner if user or computer reach 5 points
function gameOver() {
    if (computerScore == 5 || userScore == 5) {
        //remove event listener and disable cursor interaction for buttons
        btnsRemove()
        //show game over popup
        document.getElementById('gamepopup').classList.add('show');
        document.getElementById('gameover').textContent = 'GAME OVER';
        if (userScore > computerScore) {
            document.getElementById('winner').textContent = 'Congratulations! You won!';
        } else {
            document.getElementById('winner').textContent = 'The computer won!';
        }
    }
}

//Capitalise first letter of a string 
function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


    //Old play game function for console no user output 

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
