function getComputerChoice() {
    const output = ["rock", "paper", "scissors"];
    let ran = Math.floor(Math.random() * 3);
    return output[ran];
}

function getUserChoice() {
    return prompt("Rock, Paper or Scissors? ");;
}
