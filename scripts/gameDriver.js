import { createPlayer } from "./player.js";
import { renderGrid } from "./renderController.js";

const p1 = createPlayer("human");
const p2 = createPlayer("computer");
let turnPlayer = p1;
const p2Grid = document.querySelector(".playerTwo");

renderGrid(p1);
renderGrid(p2);

function attack(x = Math.floor(Math.random() * 9), y = Math.floor(Math.random() * 9)) {
    turnPlayer = p2;
    const response = p1.gameboard.receiveAttack(x, y);
    if (response === -1) {
        attack();
    }
    else {
        setTimeout(() => {
            renderGrid(p1);
            turnPlayer = p1;
        }, 1000);
    }
}

p2Grid.addEventListener("click", (event) => {
    if (turnPlayer !== p1) {
        return;
    }

    const clickedElement = event.target;
    const [x, y] = clickedElement.id.split("-");
    p2.gameboard.receiveAttack(x, y);
    renderGrid(p2);
    attack();
});