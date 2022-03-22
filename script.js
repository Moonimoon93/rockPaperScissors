const computer_score_view = document.querySelector("#computer-score");
const player_score_view = document.querySelector("#player-score");
const result_view = document.querySelector("#result");

let computer_score = 0;
let player_score = 0;

const playRound = (playerSelection) => {
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

    //Original Prompt Version
    // let playerSelection;
    // const playerPlay = () => {
    //     playerSelection = prompt('Rock, Paper, Scissors? Which one?').toLowerCase();
    //     while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    //         playerSelection = prompt("You had ONE job. Choose wisely this time.").toLowerCase();
    //     }
    // }
    // playerPlay();

    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            result_view.textContent = "Tied";
        } else if (playerSelection === "paper") {
            result_view.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            player_score++;
        } else {
            result_view.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            computer_score++;
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "paper") {
            result_view.textContent = "Tied";
        } else if (playerSelection === "scissors") {
            result_view.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            player_score++;
        } else {
            result_view.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            computer_score++;
        }
    } else {
        if (playerSelection === "scissors") {
            result_view.textContent = "Tied";
        } else if (playerSelection === "rock") {
            result_view.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            player_score++;
        } else {
            result_view.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            computer_score++;
        }
    }
    player_score_view.textContent = player_score;
    computer_score_view.textContent = computer_score;

    if (player_score === 5) {
        result_view.textContent = "YOU DID IT!";
        player_score = 0;
        computer_score = 0;
        player_score_view.textContent = player_score;
        computer_score_view.textContent = computer_score;
    } else if (computer_score === 5) {
        result_view.textContent = "YOU FAILED!"
        player_score = 0;
        computer_score = 0;
        player_score_view.textContent = player_score;
        computer_score_view.textContent = computer_score;
    }
}

const rock_btn = document.querySelector("#rock-btn");
const paper_btn = document.querySelector("#paper-btn");
const scissors_btn = document.querySelector("#scissors-btn");
rock_btn.addEventListener('click', () => {
    playRound("rock");
});
paper_btn.addEventListener('click', () => {
    playRound("paper");
});
scissors_btn.addEventListener('click', () => {
    playRound("scissors");
});


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