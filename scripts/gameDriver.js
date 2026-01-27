import { createPlayer } from "./player.js";
import { renderGrid } from "./renderController.js";

const p2Grid = document.querySelector(".playerTwo");
const gameStartDialog = document.querySelector("#gameStart");
const gameOverDialog = document.querySelector("#gameOver");
const gameOverTitle = document.querySelector("#gameOver h2");
const closeBtn = document.querySelector("#closeBtn");
const startBtn = document.querySelector("#startBtn");
const randomBtn = document.querySelector("#randomBtn");

let p1 = createPlayer("human");
let p2 = createPlayer("cpu");
let turnPlayer = p1;

renderGrid(p1);
renderGrid(p2);

p2Grid.addEventListener("click", (event) => {
    if (turnPlayer === p1) {
        const clickedElement = event.target;
        const [x, y] = clickedElement.id.split("-");
        attack(x, y);
    }
});

 closeBtn.addEventListener("click", () => {
     gameOverDialog.close();
 });

startBtn.addEventListener("click", () => {
    gameStartDialog.close();
});

randomBtn.addEventListener("click", () => {
    newGame();
});

window.onload = () => {
    gameStartDialog.showModal();
};

function attack(x = Math.floor(Math.random() * 10), y = Math.floor(Math.random() * 10)) {
    const opponent = turnPlayer === p1 ? p2 : p1;
    const response = opponent.gameboard.receiveAttack(x, y);

    if (response === -1 && turnPlayer.type === "cpu") {
        attack();
    }
    else if (response === -1) {
        return;
    }
    else {
        if (opponent.gameboard.allShipsSunk()) {
            gameOverTitle.textContent = `${turnPlayer === p1 ? "Player One Wins!" : "Player Two Wins!"}`;
            gameOverDialog.showModal();
            renderGrid(opponent);
            newGame();
        }
        else if (turnPlayer.type === "cpu") {
            setTimeout(() => {
            renderGrid(opponent);
            turnPlayer = turnPlayer === p1 ? p2 : p1;
            }, 1000);
        }
        else {
            renderGrid(opponent);
            turnPlayer = turnPlayer === p1 ? p2 : p1;
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 300);
            attack();
        }
    }
}

function newGame() {
    p1 = createPlayer("human");
    p2 = createPlayer("cpu");
    turnPlayer = p1;
    renderGrid(p1);
    renderGrid(p2);
}