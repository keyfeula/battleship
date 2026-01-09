export function shipFactory(length) {
    return {
        length,
        hits: 0,
        hit() {
            this.hits++;
            return this.hits;
        },
        isSunk() {
            return hits >= length ? true : false;
        }
    }
}