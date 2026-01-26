import { createPlayer } from "./player.js";
import { renderGrid } from "./renderController.js";

const p1 = createPlayer("human");
const p2 = createPlayer("cpu");
let turnPlayer = p1;

const p2Grid = document.querySelector(".playerTwo");
const gameOverDialog = document.querySelector("dialog");
const gameOverTitle = document.querySelector("#gameOver h2");
const closeBtn = document.querySelector("#closeBtn");

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
        }

        if (turnPlayer.type === "cpu") {
            setTimeout(() => {
            renderGrid(opponent);
            turnPlayer = turnPlayer === p1 ? p2 : p1;
            }, 1000);
        }
        else {
            renderGrid(opponent);
            turnPlayer = turnPlayer === p1 ? p2 : p1;
            attack();
        }
    }
}