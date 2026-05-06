let scissors = 1;
let rock = 2;
let paper = 3;

function humanWins(humanChoice, computerChoice) {
    if ((humanChoice > computerChoice) || (humanChoice == 3 && computerChoice == 1)) {
       return true;
    }
    return false;
}

function prettyPrint(choice) {
    if (choice == 1) {
        return "Scissors";
    } else if (choice == 2) {
        return "Rock";
    } else {
        return "Paper";
    }
}

let humanPoints = 0;
let computerPoints = 0;

function playRound(humanChoice, computerChoice) {
    console.log("Human chose: " + prettyPrint(humanChoice))
    console.log("Computer chose: " + prettyPrint(computerChoice))

    if (humanChoice == computerChoice) {
        console.log("Tie Round!")
    } else if (humanWins(humanChoice, computerChoice)) {
        humanPoints += 1;
        console.log("Human Wins!")
    } else {
        computerPoints += 1
        console.log("Computer Wins!")
    }

    console.log("Score: Human - " + humanPoints + "; Computer - " + computerPoints)
}

function getHumanChoice() {
    let choice = prompt("What will you choose? (Rock, Paper, Scissors)")
    choice = choice.toLowerCase()
    
    if (choice == "scissors") {
        return 1;
    } else if (choice == "rock") {
        return 2;
    } else if (choice == "paper") {
        return 3;
    } else {
        return getHumanChoice();
    }
}

function getComputerChoice() {
    let random = Math.random()
    if (0 <= random && random < 0.33) {
        return 1;
    } else if (random <= 0.33 && random < 0.66) {
        return 2;
    } else {
        return 3;
    }
}

while (true) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    if (humanPoints == 5 || computerPoints == 5) {
        break;
    }
}
