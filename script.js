const choices = ["rock", "paper", "scissors"];

let playerChoice = document.getElementById("player-choice");
let computerChoice = document.getElementById("computer-choice");
let newMessage = document.getElementById("message");
let newGameStats = document.getElementById("game-stats");

let gameStats = {
    wins: 0,
    losses: 0,
    ties: 0,
}

let result = null;

let player = {
    choice: null
}

console.log(player.choice)

function playRock() {
    player.choice = "rock";
    playGame();
}

function playPaper() {
    player.choice = "paper";
    playGame();
}

function playScissors() {
    player.choice = "scissors";
    playGame();

}


function playGame() {
    let isAlive = true;
    if (isAlive) {
        let newPlayerChoice = player.choice;
        let newComputerChoice = getComputerChoice();
        compareChoices(newPlayerChoice, newComputerChoice);
        console.log(player.choice);
        console.log(newComputerChoice);
        playerChoice.textContent = `Your Choice: ${newPlayerChoice}`
        computerChoice.textContent = `Computer's Choice: ${newComputerChoice}`
    }
}

function getComputerChoice() {
    let randomComputerChoice = Math.floor(Math.random() * choices.length);
    return choices[randomComputerChoice];
}

function compareChoices(player, computer) {
    if (player === computer) {
        gameStats.ties += 1;
        result = "tie";
        updateGameStats(result);
        displayMessage("It's a tie! :|");
    } else if ((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")) {
        gameStats.wins += 1;
        result = "win";
        updateGameStats(result);
        let playerCap = player.charAt(0).toUpperCase() + player.slice(1);
        displayMessage("You won! " + playerCap + " beats " + computer + " ;)");
    } else {
        gameStats.losses += 1;
        result = "lose";
        updateGameStats(result);
         let computerCap = computer.charAt(0).toUpperCase() + computer.slice(1);
         displayMessage("You lose! "+ computerCap + " beats " + player + " :(");
    }
}

function displayMessage(text) {
  newMessage.innerText = text;
}

function updateGameStats(result) {
    console.log("result" + result)
    if (result === "tie") {
        newGameStats.innerHTML = `Wins: ${gameStats.wins} | Losses: ${gameStats.losses} | Ties: <span class="stats">${gameStats.ties}</span>`;
    } else if (result === "win") {
        newGameStats.innerHTML = `Wins: <span class="stats">${gameStats.wins}</span> | Losses: ${gameStats.losses} | Ties: ${gameStats.ties}`;
    } else if (result === "lose") {
        newGameStats.innerHTML = `Wins: ${gameStats.wins} | Losses: <span class="stats">${gameStats.losses}</span> | Ties: ${gameStats.ties}`;
    }
}

function percentStats() {
    let totalGames = gameStats.wins + gameStats.losses + gameStats.ties;
    let winPercentage = (gameStats.wins / totalGames) * 100;
    let lossPercentage = (gameStats.losses / totalGames) * 100;
    let tiePercentage = (gameStats.ties / totalGames) * 100;
    if (!isNaN(winPercentage) && !isNaN(lossPercentage) && !isNaN(tiePercentage)) {
    newGameStats.innerHTML = `Wins: <span class="stats">${winPercentage.toFixed(0)}%</span> | Losses: <span class="stats">${lossPercentage.toFixed(0)}%</span> | Ties: <span class="stats">${tiePercentage.toFixed(0)}%</span>`;
    }
}