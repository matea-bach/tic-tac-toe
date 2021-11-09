"use strict"

window.onload = function () {
    console.log("window loaded");
    initializeGame();
}

let shape = "cross";
let cells = document.querySelectorAll('.cell');

function initializeGame() {
    let cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        cell.addEventListener("click", function (e) {
            console.log(e);
            let currentTurn = shape === "cross" ? "circle" : "cross";
            this.classList.add(currentTurn);
            console.log(this);

            shape === "cross"
                ? (shape = "circle")
                : (shape = "cross");
        });
        console.log(cell);
    }
    console.log();
}

// set up restart game button
// set up event listener handleclickCell to line 17

function restartGame() {
    console.log(cells);
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        cell.classList.remove("cross", "circle");
        console.log(cell.classList);
    }

};


// alt + up/down moves a line
// crtl + [ or ] indent or outdent line
// crtl + D is multi-selection of elements of example
//  alt + click multi-select cursor
//ctrl +K and crtl + C add a line comment
//iterate through cells to remove values to restart game instead of using document.location, hardcode to cell class to initial state - which is going to "restart" the game