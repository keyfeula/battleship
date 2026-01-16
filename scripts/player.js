import { createGameboard } from "./gameboard";

export function createPlayer(type) {
    const gameboard = createGameboard();
    return {
        type,
        gameboard
    }
}