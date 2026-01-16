    import { createGameboard } from "../gameboard";
    
    describe("gameboard object interface methods", () => {
        const gameboard = createGameboard();
        const ships = gameboard.ships;

        test("placeShip function places the ships on the correct coordinates", () => {
            expect(gameboard.placeShip(0, 0, ships[0])).toBe(ships[0]);
        });

        test("placeShip function places the ships on the correct coordinates", () => {
            expect(gameboard.placeShip(9, 8, ships[2])).toBe(ships[2]);
        });

        test("receiveAttack method calls the ship.hit function", () => {
            expect(gameboard.receiveAttack(0, 0)).toBe(1);
        });

        test("receiveAttack method records a miss", () => {
            expect(gameboard.receiveAttack(5, 5)).toBe(0);
        });

        test("allShipsSunk returns false if all ships isSunk is false", () => {
            expect(gameboard.allShipsSunk()).toBe(false);
        });

        test("allShipsSunk return true is all ships isSunk is true", () => {
            for (ship of ships) {
                ship.hits = 5;
            }
            expect(gameboard.allShipsSunk()).toBe(true);
        })

    });