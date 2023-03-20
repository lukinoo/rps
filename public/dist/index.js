"use strict";
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const gameButtons = document.querySelectorAll(".game-button");
const playerSide = document.getElementById("player-side");
const computerSide = document.getElementById("computer-side");
const choices = ["rock", "paper", "scissors"];
let pScore = 0;
let cScore = 0;
function randomNumber() {
    return Math.floor(Math.random() * choices.length);
}
function handleGameOptions(pC, cC) {
    switch (pC + cC) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            pScore += 1;
            playerScore.innerHTML = "Player score: " + pScore;
            break;
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            cScore += 1;
            computerScore.innerHTML = "Computer score: " + cScore;
            break;
        default:
            break;
    }
}
function handleAnimation() {
    playerSide.style.animation = "hand-shake 0.5s linear 5";
    computerSide.style.animation = "hand-shake 0.5s linear 5";
}
function resetAnimation() {
    playerSide.style.animation = "";
    computerSide.style.animation = "";
}
function displayAssets(pC, cC) {
    playerChoice.src = `./public/assets/${pC}.png`;
    computerChoice.src = `./public/assets/${cC}.png`;
}
function handleButtons() {
    for (let i = 0; i < gameButtons.length; i++) {
        gameButtons[i].addEventListener("click", function () {
            const pChoice = this.dataset.choice;
            const cChoice = choices[randomNumber()];
            playerChoice.src = "./public/assets/rock.png";
            computerChoice.src = "./public/assets/rock.png";
            handleAnimation();
            setTimeout(() => {
                resetAnimation();
                handleGameOptions(pChoice, cChoice);
                displayAssets(pChoice, cChoice);
            }, 2500);
        });
    }
}
handleButtons();
