let computerChoice;
const computerPlay = () => {
    let rand = Math.floor((Math.random() * 3) + 1)
    switch (rand) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors"
            break;
    }
}
let playerChoice;
const playerPlay = () => {
    playerChoice = prompt('Rock, Paper, Scissors? Which one?').toLowerCase();
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        playerChoice = prompt("You had ONE job. Choose wisely this time.").toLowerCase();
    }
}
let winStack = 0;
const playRound = (computerSelection, playerSelection) => {
    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            console.log(`Tied!`)
        } else if (playerSelection === "paper") {
            winStack++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "paper") {
            console.log(`Tied!`)
        } else if (playerSelection === "scissors") {
            winStack++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        }
    } else {
        if (playerSelection === "scissors") {
            console.log(`Tied!`)
        } else if (playerSelection === "rock") {
            winStack++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        }
    }
}

const game5 = () => {
    for (let i = 0; i < 5; i++) {
        computerPlay();
        playerPlay();
        playRound(computerChoice, playerChoice);
    }
    console.log(`You won ${winStack} times.`);
    winStack = 0;
}

game5();