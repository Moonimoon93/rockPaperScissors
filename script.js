let winStack = 0;
const playRound = () => {
    let computerSelection;
    const computerPlay = () => {
        let rand = Math.floor((Math.random() * 3) + 1)
        switch (rand) {
            case 1:
                computerSelection = "rock";
                break;
            case 2:
                computerSelection = "paper";
                break;
            case 3:
                computerSelection = "scissors"
                break;
        }
    }
    computerPlay();

    let playerSelection;
    const playerPlay = () => {
        playerSelection = prompt('Rock, Paper, Scissors? Which one?').toLowerCase();
        while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            playerSelection = prompt("You had ONE job. Choose wisely this time.").toLowerCase();
        }
    }
    playerPlay();

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

const rock_btn = document.querySelector("#rock-btn");
const paper_btn = document.querySelector("#paper-btn");
const scissors_btn = document.querySelector("#scissors-btn");
rock_btn.addEventListener('click', playRound);
paper_btn.addEventListener('click', playRound);
scissors_btn.addEventListener('click', playRound);

//Removed game of 5 logic for now. (2022-03-21 21:33)
// const game5 = () => {
//     for (let i = 0; i < 5; i++) {
//         computerPlay();
//         playerPlay();
//         playRound(computerChoice, playerChoice);
//     }
//     console.log(`You won ${winStack} times.`);
//     winStack = 0;
// }

// game5();