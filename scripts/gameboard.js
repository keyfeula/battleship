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
    const grid = initializeGrid();

    function initializeGrid() {
        const array = [];
        for (let i = 0; i < ROWS; i++) {
            array[i] = [];
            for (let j = 0; j < COLUMNS; j++) {
                array[i][j] = null;
            }
        }
        return array;
    }

    function placeShip(x, y, ship) {
        for (let i = 0; i < ship.length; i++) {
            grid[x][y + i] = ship;
        }
        return grid[x][y];
    }

    function receiveAttack(x, y) {
        if (grid[x][y] === 0 || grid[x][y] === 1) {
            return -1;
        }
        if (grid[x][y]) {
            grid[x][y].hit();
            grid[x][y] = 1;
            return 1;
        }
        else {
            grid[x][y] = 0;
            return 0;
        }
    }

    function allShipsSunk() {
        for (ship of ships) {
            if (!ship.isSunk()) {
                return false;
            }
        }
        return true;
    }

    return {
        ships,
        placeShip,
        receiveAttack,
        allShipsSunk,
    }

}