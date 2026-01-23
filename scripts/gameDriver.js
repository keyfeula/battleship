import { createPlayer } from "./player.js";
import { renderGrids } from "./renderGameboard.js";

const p1 = createPlayer("human");
const p2 = createPlayer("computer");
let turnPlayer = p1;
const mainContainer = document.querySelector("main");

renderGrids(p1, p2);

mainContainer.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (!clickedElement.classList.contains("cell")) {
        return;
    }

    const coordinates = clickedElement.id.split("-");
    const attackResponse = turnPlayer.gameboard.receiveAttack(coordinates[0], coordinates[1]);
    switch(attackResponse) {
        case -1:
            break;
        case 0:
            clickedElement.textContent = "O";
            break;
        case 1:
            clickedElement.classList.add("hit");
            break;
    }
});