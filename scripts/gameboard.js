import { createShip } from "./ship.js";

export function createGameboard() {
    const ROWS = 10;
    const COLUMNS = 10;
    const carrier = createShip(5);
    const battleship = createShip(4);
    const destroyer = createShip(3);
    const submarine = createShip(3);
    const patrolBoat = createShip(2);
    const ships = [carrier, battleship, destroyer, submarine, patrolBoat];

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
    
    function receiveAttack(x, y) {
        gameboard[0][0] = carrier;
        if (gameboard[x, y]) {
            return "Hits: " + gameboard[x][y].hit();
        }
        else {
            return "Miss!";
        }
    }

    initializeGameboard();

    return {
        receiveAttack
    }

}