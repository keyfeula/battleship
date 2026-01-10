export function createShip(length) {
    return {
        length,
        hits: 0,
        hit() {
            this.hits++;
            return this.hits;
        },
        isSunk() {
            return this.hits >= this.length;
        }
    }
}