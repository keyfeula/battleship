import { createPlayer } from "./player.js";

const playerOne = createPlayer("human");
const playerTwo = createPlayer("computer");

const p1GridContainer = document.querySelector(".playerOne .grid");
const p2GridContainer = document.querySelector(".playerTwo .grid");

function createGrid() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const square = document.createElement("div");
            const oppsSquare = document.createElement("div");
            square.classList.add("square");
            oppsSquare.classList.add("square");
            square.id = `${i}-${j}`;
            oppsSquare.id = `${i}-${j}`;
            square.textContent = square.id;
            oppsSquare.textContent = oppsSquare.id;
            p1GridContainer.append(square);
            p2GridContainer.append(oppsSquare);
        }
    }
}

createGrid();

