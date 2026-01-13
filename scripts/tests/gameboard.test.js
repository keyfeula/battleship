    import { createGameboard } from "../gameboard";
    
    describe("gameboard object interface methods", () => {
        const gameboard = createGameboard();

        test("receiveAttack method calls the ship.hit function", () => {
            expect(gameboard.receiveAttack(0, 0)).toBe("Hits: 1");
        })

    });