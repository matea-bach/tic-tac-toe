"use strict"

window.onload = function () {
    console.log("window loaded");
    initializeGame();
}


function handleClickCell() {
    console.log("Cell is clicked!")
}

function initializeGame() {
    let cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        console.log(cell);
    }
    console.log();
}

// set up event listener handleclickCell to line 17
