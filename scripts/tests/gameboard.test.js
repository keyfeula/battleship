    import { createGameboard } from "../gameboard";
    
    describe("gameboard object interface methods", () => {
        const gameboard = createGameboard();
        const ships = gameboard.ships;

        test("placeShip function places the ships on the correct coordinates", () => {
            expect(gameboard.placeShip(0, 0, ships[0])).toBe(ships[0]);
        });

        test("placeShip function places the ships on the correct coordinates", () => {
            expect(gameboard.placeShip(1, 0, ships[2])).toBe(ships[2]);
        });

        test("receiveAttack method calls the ship.hit function", () => {
            expect(gameboard.receiveAttack(0, 0)).toBe(1);
        });

    });