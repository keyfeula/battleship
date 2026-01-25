import { createGameboard } from "./gameboard.js";

export function createPlayer(type) {
    const gameboard = createGameboard();
    gameboard.randomizeShips();
    return {
        type,
        gameboard
    }
}