"use strict"

window.onload = function () {
    console.log("window loaded");
    initializeGame();
}

let shape = "cross";

function handleClickCell() {
    console.log("Cell is clicked!")
}

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

// set up event listener handleclickCell to line 17
// set up restart game button

function restartGame() {
    let button = document.getElementById("btn-restart")
    button = document.location.href = "http://localhost:5500/";
}


//iterate through cells to remove values to restart game instead of using document.location, hardcode to cell class to initial state - which is going to "restart" the game