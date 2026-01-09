import { shipFactory } from "./shipFactory";

const testShip = shipFactory(4);

describe("shipFactory interface methods", () => {

    test("hit method increments hit variable by 1", () => {
        expect(testShip.hit()).toBe(1);
    });

    test("hit method increments hit variable by 1 again", () => {
        expect(testShip.hit()).toBe(2);
    });
})