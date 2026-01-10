import { createShip } from "./ship.js";

export function createGameboard() {
    const ROWS = 10;
    const COLUMNS = 10;
    const carrier = createShip(5);
    const battleship = createShip(4);
    const destroyer = createShip(3);
    const submarine = createShip(3);
    const patrolBoat = createShip(2);

    const gameboard = [];

    function printGameboard() {
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLUMNS; j++) {
                console.log(`${i}, ${j}: ${gameboard[i][j]}`);
            }
        }
    }

    function initializeGameboard() {
        for (let i = 0; i < ROWS; i++) {
            gameboard[i] = [];
            for (let j = 0; j < COLUMNS; j++) {
                gameboard[i][j] = null;
            }
        }
    }

    initializeGameboard();
    printGameboard();

}

createGameboard();