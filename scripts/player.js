import { createGameboard } from "./gameboard.js";

export function createPlayer(type) {
    const gameboard = createGameboard();
    return {
        type,
        gameboard
    }
}