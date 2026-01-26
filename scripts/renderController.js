export function renderGrid(player) {
    let gridContainer = "";
    if (player.type === "cpu") {
        gridContainer = document.querySelector(".playerTwo .grid");
    }
    else {
        gridContainer = document.querySelector(".playerOne .grid");
    }
    gridContainer.textContent = "";

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.id = `${i}-${j}`;
            const cellState = player.gameboard.getShipAt(i, j);

            switch (cellState) {
                case null:
                    break;
                case 0:
                    cell.textContent = "O";
                    break;
                case 1:
                    cell.classList.add("hit");
                    break;
                default:
                    if(player.type === "human") {
                        cell.classList.add("ship");
                    }
            }
            
            gridContainer.append(cell);
        }
    }
}