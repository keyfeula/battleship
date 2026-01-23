export function renderGrids(p1, p2) {
    const p1GridContainer = document.querySelector(".playerOne .grid");
    const p2GridContainer = document.querySelector(".playerTwo .grid");

    p1.gameboard.randomizeShips();
    p2.gameboard.randomizeShips();

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {

            const p1Cell = document.createElement("div");
            const p2Cell = document.createElement("div");

            if (p1.gameboard.getShipAt(i, j)) {
                p1Cell.classList.add("ship");
            }
            if (p2.gameboard.getShipAt(i, j)) {
                p2Cell.classList.add("ship");
            }
            
            p1Cell.classList.add("cell");
            p2Cell.classList.add("cell");
            p1Cell.id = `${i}-${j}`;
            p2Cell.id = `${i}-${j}`;
            p1GridContainer.append(p1Cell);
            p2GridContainer.append(p2Cell);
        }
    }
}