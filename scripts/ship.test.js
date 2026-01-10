import { createShip } from "./ship";

const testShip = createShip(2);

describe("ship object interface methods", () => {

    test("hit method increments hit variable by 1", () => {
        expect(testShip.hit()).toBe(1);
    });

    test("isSunk method is false if less hits on ship than its length", () => {
        expect(testShip.isSunk()).toBe(false);
    });

    test("hit method increments hit variable by 1 again", () => {
        expect(testShip.hit()).toBe(2);
    });

    test("isSunk method is true if more or as many hits on ship as its length", () => {
        expect(testShip.isSunk()).toBe(true);
    });
})